const target = process.argv[2];
const branch = process.env.VERCEL_GIT_COMMIT_REF;

if (!["staging", "production"].includes(target) || !branch) {
  console.error(
    "Usage: node scripts/vercel-ignore-build.mjs <staging|production> with VERCEL_GIT_COMMIT_REF set.",
  );
  process.exit(2);
}

const shouldBuild =
  target === "production" ? branch === "main" : branch !== "main";

console.log(
  `${shouldBuild ? "Building" : "Ignoring"} ${branch} for the ${target} project.`,
);

// Vercel's Ignored Build Step uses 0 to continue and 1 to cancel the build.
process.exit(shouldBuild ? 0 : 1);
