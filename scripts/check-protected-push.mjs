import { execFileSync } from "node:child_process";

import { isProtectedBranch } from "./branch-policy.mjs";

const branch =
  process.env.LEFTHOOK_BRANCH ??
  execFileSync("git", ["branch", "--show-current"], {
    encoding: "utf8",
  }).trim();

if (isProtectedBranch(branch)) {
  console.error(
    `Direct pushes to ${branch} are prohibited. Push a feature branch and open a pull request instead.`,
  );
  process.exit(1);
}

console.log(`Branch policy passed for ${branch || "detached HEAD"}.`);
