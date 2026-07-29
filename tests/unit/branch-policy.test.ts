import { describe, expect, it } from "vitest";

import { isProtectedBranch } from "../../scripts/branch-policy.mjs";

describe("protected branch policy", () => {
  it.each(["main", "release/dev"])("protects %s", (branch) => {
    expect(isProtectedBranch(branch)).toBe(true);
  });

  it.each(["feature/ci", "fix/forms", "dependabot/npm_and_yarn/zod-5"])(
    "allows work on %s",
    (branch) => {
      expect(isProtectedBranch(branch)).toBe(false);
    },
  );
});
