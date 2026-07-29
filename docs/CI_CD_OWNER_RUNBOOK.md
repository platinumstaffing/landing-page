# CI/CD Owner Runbook

The tracked workflows and tests are complete, but the controls in this document require the
repository owner and Vercel project administrators. Apply them before treating either protected
branch or deployment project as production-ready.

## 1. GitHub repository settings

Repository: `platinumstaffing/landing-page`

1. In **Settings → General → Pull Requests**:
   - Enable **Allow squash merging**.
   - Disable merge commits and rebase merging.
   - Enable automatic deletion of head branches.
2. In **Settings → Actions → General**:
   - Allow GitHub-authored actions and only the explicitly used third-party actions:
     `pnpm/action-setup`, `anchore/sbom-action`, `zaproxy/action-baseline`,
     `rhysd/actionlint`, `zizmorcore/zizmor-action`, and `vercel/repository-dispatch`.
   - Require actions to be pinned to a full-length commit SHA.
   - Set the default `GITHUB_TOKEN` permission to **Read repository contents**.
   - Do not allow Actions to approve pull requests.
3. In **Settings → Code security and analysis**:
   - Enable the dependency graph, Dependabot alerts, Dependabot security updates, CodeQL default
     setup/third-party workflow reporting, secret scanning, and push protection.
   - Do not permit routine push-protection bypasses. Investigate and rotate any detected secret.
4. Run each workflow on a temporary collaborator branch once so all required check names exist.
5. Create both rulesets using an owner-authenticated GitHub CLI:

   ```bash
   gh api --method POST repos/platinumstaffing/landing-page/rulesets \
     --input .github/rulesets/release-dev.json
   gh api --method POST repos/platinumstaffing/landing-page/rulesets \
     --input .github/rulesets/main.json
   ```

6. Inspect both rulesets in **Settings → Rules → Rulesets** and confirm:
   - Active enforcement and an empty bypass list.
   - Pull requests, signed commits, linear history, conversation resolution, and every listed
     status check are required.
   - Force pushes and deletion are blocked.
7. Open a test PR from any branch other than `release/dev` to `main`; `pr-policy` must close it.
8. Open a valid collaborator PR to `release/dev`; all eight required checks must report.

The `pull_request_target` policy workflow only reads event metadata. It never checks out or runs
pull-request code. Ordinary CI jobs independently refuse to run for forks or untrusted authors.
Package-manager caches are intentionally disabled in pull-request-capable workflows to avoid
cross-run cache-poisoning risk.

## 2. GitHub variables and environments

Create repository variables:

| Variable | Value |
| --- | --- |
| `VERCEL_STAGING_PROJECT_ID` | Project ID for the isolated staging project |
| `VERCEL_PRODUCTION_PROJECT_ID` | Project ID for the isolated production project |

Create GitHub environments named exactly `staging` and `production`. In each environment, add:

| Secret | Purpose |
| --- | --- |
| `VERCEL_AUTOMATION_BYPASS_SECRET` | Lets Playwright, Lighthouse, and ZAP reach protected deployments |

Do not add application delivery or Blob credentials to GitHub. Those belong only in their
corresponding Vercel project. The fallback deployment procedure may use environment-scoped
`VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`, but add them only if Deployment Checks
are unavailable and remove them when no longer needed.

## 3. Isolated staging Vercel project

1. Import the GitHub repository into a project dedicated to staging.
2. Set the Production Branch to `release/dev`.
3. Keep Vercel Git Fork Protection enabled.
4. Use the repository's install command and `pnpm vercel-build`.
5. Configure the Ignored Build Step:

   ```bash
   node scripts/vercel-ignore-build.mjs staging
   ```

   This builds `release/dev` and internal feature branches, but never duplicates `main`.
6. Attach only the staging domain.
7. Set `DEPLOYMENT_TARGET=staging` for Production and Preview scopes.
8. Configure separate staging values for every variable in `.env.example`:
   - A staging canonical URL.
   - A Resend test/sandbox sender and non-customer inbox.
   - A staging-only private Blob store.
   - Staging Turnstile keys.
9. Enable Standard Deployment Protection and create an Automation Bypass secret matching the
   GitHub `staging` environment secret.

## 4. Isolated production Vercel project

1. Import the same repository into a second project dedicated to production.
2. Set the Production Branch to `main`.
3. Keep Vercel Git Fork Protection enabled.
4. Use the repository's install command and `pnpm vercel-build`.
5. Configure the Ignored Build Step:

   ```bash
   node scripts/vercel-ignore-build.mjs production
   ```

   Every non-`main` deployment is canceled before building.
6. Attach only the real production domain.
7. Set `DEPLOYMENT_TARGET=production` only in the Production scope.
8. Configure production-only Resend, Blob, Turnstile, inbox, and canonical URL values. Do not copy
   these values to Preview or staging.
9. Keep public browser source maps disabled and create a distinct Automation Bypass secret matching
   the GitHub `production` environment secret.

## 5. Blocking deployment verification

Enable Vercel's GitHub `repository_dispatch` events and Deployment Checks on both projects.
Register these exact blocking check names:

- `Vercel - staging runtime verification`
- `Vercel - production runtime verification`

Use the `vercel.deployment.ready` event. The workflow validates the Vercel project ID, immutable
`vercel.app` URL, configured repository, protected Git ref, full commit SHA, and that the commit is
reachable from the expected protected branch before a secret is passed to a tool. It then runs
Chromium smoke/accessibility checks, security-header assertions, Lighthouse budgets, and an OWASP
ZAP baseline. A failed or missing check must leave the previous domain alias in place.

If Deployment Checks are unavailable, temporarily use environment-scoped Vercel credentials to:

1. Build an unaliased deployment from the protected commit.
2. Run `Deployment Verification` manually with its immutable URL, target, and full SHA.
3. Promote that exact deployment only after the workflow passes.
4. Remove the temporary credentials after promotion.

Never run `vercel --prod` directly from a feature branch or a developer workstation.

## 6. Rollback and recovery

1. In the affected Vercel project, open **Deployments**.
2. Select the most recent deployment that passed `runtime-verification`.
3. Use **Promote to Production** (or Instant Rollback) to reassign the domain without rebuilding.
4. Confirm the immutable deployment SHA and run the manual `Deployment Verification` workflow.
5. Revert the bad commit through the normal `release/dev` → `main` pull-request path.
6. Record the incident and corrective action in `docs/DECISIONS.md`.

Do not change DNS, delete the failed deployment, or rebuild an older commit as the first rollback
step. Re-promoting the last verified immutable deployment is faster and preserves evidence.

## 7. Acceptance checks

- A fork PR is closed and no untrusted checkout/install job runs.
- Dependabot opens updates only against `release/dev`.
- Direct pushes, force pushes, deletion, and check bypass fail on both long-lived branches.
- `main` accepts only the same-repository `release/dev` branch.
- Staging never builds `main`; production never builds any other branch.
- Missing Resend, Blob, Turnstile, or canonical URL values fail `pnpm vercel-build`.
- A deliberately failed runtime check leaves the previous alias live.
- Rollback restores the last verified deployment without rebuilding.
