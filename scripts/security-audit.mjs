import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const maxAttempts = 4;
const retryDelaysMs = [20_000, 40_000, 60_000];

export function isTransientRegistryFailure(output) {
  return [
    /TimeoutError/,
    /operation was aborted due to timeout/i,
    /error \(23\)/,
    /ETIMEDOUT/,
    /ECONNRESET/,
    /ENOTFOUND/,
    /EAI_AGAIN/,
    /UND_ERR_CONNECT_TIMEOUT/,
    /UND_ERR_HEADERS_TIMEOUT/,
    /UND_ERR_BODY_TIMEOUT/,
    /socket hang up/i,
    /fetch failed/i,
    /network socket disconnected/i,
  ].some((pattern) => pattern.test(output));
}

export function shouldRetryAudit(code, output) {
  if (code === 0) {
    return false;
  }

  if (/\d+ vulnerabilities found/i.test(output)) {
    return false;
  }

  return isTransientRegistryFailure(output);
}

function runAudit() {
  return new Promise((resolve) => {
    const child = spawn("pnpm", ["audit", "--prod", "--audit-level", "high"]);

    let output = "";

    child.stdout.on("data", (chunk) => {
      process.stdout.write(chunk);
      output += chunk;
    });
    child.stderr.on("data", (chunk) => {
      process.stderr.write(chunk);
      output += chunk;
    });
    child.on("error", (error) => {
      resolve({ code: 1, output: error.message });
    });
    child.on("close", (code) => {
      resolve({ code: code ?? 1, output });
    });
  });
}

async function main() {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const { code, output } = await runAudit();

    if (code === 0) {
      return;
    }

    const canRetry = attempt < maxAttempts && shouldRetryAudit(code, output);

    if (!canRetry) {
      process.exit(code);
    }

    const delay = retryDelaysMs[attempt - 1] ?? 60_000;
    console.error(
      `npm advisory request failed (attempt ${attempt}/${maxAttempts}). Retrying in ${delay / 1000}s.`,
    );
    await new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
}

const invokedAsScript =
  Boolean(process.argv[1]) &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href;

if (invokedAsScript) {
  await main();
}
