import { describe, expect, it } from "vitest";

import {
  isTransientRegistryFailure,
  shouldRetryAudit,
} from "../../scripts/security-audit.mjs";

const timeoutLog = [
  "[WARN] POST https://registry.npmjs.org/-/npm/v1/security/advisories/bulk error (23).",
  "[23] The operation was aborted due to timeout",
  "TimeoutError: The operation was aborted due to timeout",
].join("\n");

const advisoryLog = [
  "┌─────────────────────┬────────────────────────────────────────────────────────┐",
  "│ high                │ Prototype pollution in fast-uri                       │",
  "└─────────────────────┴────────────────────────────────────────────────────────┘",
  "4 vulnerabilities found",
].join("\n");

describe("security audit retry gating", () => {
  it("retries a registry timeout with no advisory result", () => {
    expect(isTransientRegistryFailure(timeoutLog)).toBe(true);
    expect(shouldRetryAudit(1, timeoutLog)).toBe(true);
  });

  it("does not retry a completed high-severity advisory report", () => {
    expect(shouldRetryAudit(1, advisoryLog)).toBe(false);
  });

  it("does not retry when pnpm warned about a timeout but then reported advisories", () => {
    expect(shouldRetryAudit(1, `${timeoutLog}\n${advisoryLog}`)).toBe(false);
  });
});
