import { execFileSync } from "node:child_process";

const maxFileBytes = 5 * 1024 * 1024;
const conflictPattern = /^(<{7}|={7}|>{7})(?: .*)?$/m;

const output = execFileSync(
  "git",
  ["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"],
  { encoding: "utf8" },
);

const files = output.split("\0").filter(Boolean);
const failures = [];

for (const file of files) {
  let content;
  try {
    content = execFileSync("git", ["show", `:${file}`]);
  } catch {
    continue;
  }

  if (content.byteLength > maxFileBytes) {
    failures.push(`${file}: exceeds the 5 MiB review limit`);
  }

  if (!content.includes(0) && conflictPattern.test(content.toString("utf8"))) {
    failures.push(`${file}: contains an unresolved merge conflict marker`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${files.length} staged file(s).`);
