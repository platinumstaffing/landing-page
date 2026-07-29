export const protectedBranches = new Set(["main", "release/dev"]);

export function isProtectedBranch(branch) {
  return protectedBranches.has(branch);
}
