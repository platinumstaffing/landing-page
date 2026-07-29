const deploymentTarget = process.env.DEPLOYMENT_TARGET;

if (!deploymentTarget) {
  console.log(
    "Environment validation skipped: DEPLOYMENT_TARGET is not set (local/CI build).",
  );
  process.exit(0);
}

if (!["staging", "production"].includes(deploymentTarget)) {
  console.error('DEPLOYMENT_TARGET must be either "staging" or "production".');
  process.exit(1);
}

const requiredVariables = [
  "NEXT_PUBLIC_SITE_URL",
  "RESEND_API_KEY",
  "CONTACT_FROM_EMAIL",
  "CONTACT_TO_EMAIL",
  "BLOB_READ_WRITE_TOKEN",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_SECRET_KEY",
];

const missingVariables = requiredVariables.filter(
  (name) => !process.env[name]?.trim(),
);

if (missingVariables.length > 0) {
  console.error(
    `Missing required ${deploymentTarget} environment variables: ${missingVariables.join(", ")}`,
  );
  process.exit(1);
}

let siteUrl;
try {
  siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL);
} catch {
  console.error("NEXT_PUBLIC_SITE_URL must be a valid absolute URL.");
  process.exit(1);
}

if (siteUrl.protocol !== "https:") {
  console.error(
    "NEXT_PUBLIC_SITE_URL must use HTTPS for deployed environments.",
  );
  process.exit(1);
}

console.log(`${deploymentTarget} environment configuration is complete.`);
