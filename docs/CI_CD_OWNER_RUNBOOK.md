# CI/CD Owner Runbook

This is a browser-only setup guide for the repository owner and Vercel project administrator. No
GitHub CLI or local API commands are required.

Repository: `platinumstaffing/landing-page`

Do not treat either long-lived branch or Vercel project as protected until every applicable
checkbox in this runbook has been completed.

Official references:

- [GitHub: managing repository rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository)
- [GitHub: repository Actions settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)
- [GitHub: security and analysis settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)
- [GitHub: deployment environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments)
- [Vercel: project settings](https://vercel.com/docs/project-configuration/project-settings)
- [Vercel: Deployment Checks](https://vercel.com/docs/deployment-checks)

## 0. One-time bootstrap order

The policy workflow uses `pull_request_target` deliberately so it executes the trusted workflow
from the pull request's base branch and never checks out untrusted pull-request code. This means
the workflow must already exist on a base branch before its `pr-policy` check can run there.

Use this order for the first rollout:

1. Push the CI/CD feature branch and open a pull request into `release/dev`.
2. Confirm the available CI and security checks pass.
3. Manually confirm the pull request:
   - Comes from this repository, not a fork.
   - Was opened by a collaborator.
   - Targets `release/dev`.
4. Squash-merge it into `release/dev`.
5. Import and activate the `release/dev` ruleset using section 5.
6. Open the one-time promotion pull request from the same repository's `release/dev` branch into
   `main`.
7. Because `main` does not yet contain the trusted policy workflow, manually confirm the source is
   exactly `release/dev`, then squash-merge it.
8. Import and activate the `main` ruleset.
9. Keep any existing classic branch-protection rules enabled until both rulesets show **Active**
   and the acceptance tests in section 11 pass. Remove duplicate classic rules only afterward.

After this bootstrap, every future pull request to either protected branch must report all eight
required checks. Do not use this bootstrap exception again.

## 1. GitHub merge and repository settings

1. Open the repository on GitHub.
2. Click **Settings**. If it is hidden, open the repository navigation dropdown and select
   **Settings**.
3. Open **General**.
4. Scroll to **Pull Requests**.
5. Configure:
   - Enable **Allow squash merging**.
   - Set the default squash commit message to **Pull request title** or **Pull request title and
     commit details**.
   - Disable **Allow merge commits**.
   - Disable **Allow rebase merging**.
   - Enable **Automatically delete head branches**.
6. Confirm the default branch remains `main`.
7. Scroll to the repository danger-zone settings and confirm branch deletion is not being used as
   a normal release mechanism.

The repository uses squash-only history so the protected branches remain linear. GitHub-generated
squash commits are the commits that enter the protected branch.

## 2. GitHub Actions policy

1. Go to **Settings → Actions → General**.
2. Under **Actions permissions**, select **Allow owner, and select non-owner, actions and reusable
   workflows**. GitHub may display the repository owner or organization name instead of “owner.”
3. Enable **Allow actions created by GitHub**.
4. Do not broadly enable all Marketplace actions or all verified creators.
5. Under the field for explicitly allowed actions, enter these comma-separated patterns:

   ```text
   pnpm/action-setup@*,
   anchore/sbom-action@*,
   zaproxy/action-baseline@*,
   rhysd/actionlint@*,
   zizmorcore/zizmor-action@*,
   vercel/repository-dispatch@*
   ```

6. Enable **Require actions to be pinned to a full-length commit SHA**.
7. Click **Save**.
8. Under **Workflow permissions**:
   - Select **Read repository contents and packages permissions**.
   - Clear **Allow GitHub Actions to create and approve pull requests**.
   - Click **Save**.
9. If **Fork pull request workflows from outside collaborators** is shown, choose the most
   restrictive approval policy available. The repository policy workflow will still close
   disallowed pull requests, but untrusted code must never receive an approved workflow run.
10. Set **Artifact and log retention** to 30 days or less. Individual workflows use shorter
    retention where appropriate.

Every workflow also declares its own least-privilege `permissions`; the repository setting is the
restricted default.

## 3. GitHub security features

1. Go to **Settings → Advanced Security**. On some accounts this appears as
   **Security & analysis**.
2. Enable or verify:
   - **Dependency graph**.
   - **Dependabot alerts**.
   - **Dependabot security updates**.
   - **Secret scanning** or **Secret Protection**.
   - **Push protection**.
   - **Code scanning**.
3. Do not use push-protection bypasses for convenience. If a secret is detected:
   - Stop the push.
   - Remove the secret.
   - Rotate it if it was real.
   - Review the alert in **Security and quality → Secret scanning**.
4. The repository already contains an advanced CodeQL workflow in
   `.github/workflows/security.yml`. Do not enable a duplicate CodeQL default setup for the same
   JavaScript/TypeScript language. After the workflow runs, verify CodeQL results appear under
   **Security and quality → Code scanning**.
5. Open **Security and quality → Dependabot** and verify alerts are visible.
6. Open **Security and quality → Code scanning** and verify the JavaScript/TypeScript analysis
   completed.
7. Open **Security and quality → Secret scanning** and resolve any existing alert before release.

The tracked Dependabot configuration opens security and version-update pull requests against
`release/dev`, never directly against `main`.

## 4. Collaborator access review

1. Go to **Settings → Collaborators and teams** or **Settings → Collaborators**.
2. Review every user, team, and installed GitHub App with write, maintain, or admin access.
3. Remove stale accounts and unexpected applications.
4. Give people the lowest role that supports their work.
5. Confirm no outside contributor has collaborator access merely to bypass the pull-request policy.
6. Review **Settings → Integrations → GitHub Apps** and remove unused installations.

Public repositories can still be forked. The repository cannot disable public forks, so the
metadata-only `pr-policy` workflow closes fork and non-collaborator pull requests before any
checkout or dependency installation occurs.

## 5. Import the two protected-branch rulesets in the GitHub UI

The two ready-to-import files are:

- `.github/rulesets/release-dev.json`
- `.github/rulesets/main.json`

### 5.1 Import `release/dev`

Do this only after the CI/CD bootstrap pull request has been merged into `release/dev`.

1. Go to **Settings → Rules → Rulesets**.
2. Open the **New ruleset** dropdown.
3. Click **Import a ruleset**.
4. In the file picker, select `.github/rulesets/release-dev.json` from a local checkout or a
   downloaded copy of the repository.
5. Review the imported form before clicking **Create**:
   - Name: `Protect release/dev`.
   - Enforcement status: **Active**.
   - Bypass list: empty.
   - Target: branch matching exactly `release/dev`.
   - **Restrict deletions**: enabled.
   - **Block force pushes**: enabled.
   - **Require linear history**: enabled.
   - **Require signed commits**: disabled. PR-only updates, required checks, strict
     up-to-date branches, linear history, and an empty bypass list remain the enforcement boundary.
   - **Require a pull request before merging**: enabled.
   - Required approvals: `0`.
   - Required code-owner approval: disabled.
   - Required approval of the most recent push: disabled.
   - Required conversation resolution: enabled.
   - Allowed merge method: squash only.
   - **Require status checks to pass**: enabled.
   - **Require branches to be up to date before merging**: enabled.
6. Confirm these eight status checks are listed exactly:
   - `pr-policy`
   - `ci-quality`
   - `ci-build`
   - `ci-browser-smoke`
   - `security-dependency-review`
   - `security-dependency-and-secrets`
   - `security-codeql`
   - `workflow-security`
7. Click **Create**.
8. Reopen the ruleset and confirm the enforcement badge says **Active**.

### 5.2 Import `main`

Do this only after the one-time `release/dev` → `main` bootstrap promotion has placed the trusted
workflow files on `main`.

1. Return to **Settings → Rules → Rulesets**.
2. Open **New ruleset → Import a ruleset**.
3. Select `.github/rulesets/main.json`.
4. Review:
   - Name: `Protect main`.
   - Enforcement status: **Active**.
   - Bypass list: empty.
   - Target: branch matching exactly `main`.
   - The same branch protections and eight required checks listed above.
5. Click **Create**.
6. Reopen the ruleset and confirm it is **Active**.

### 5.3 Verify ruleset behavior

1. Go to **Settings → Rules → Insights** after test pull requests and pushes.
2. Filter by each ruleset and confirm blocked direct updates appear as failed rule evaluations.
3. Do not add repository administrators, owners, users, teams, Dependabot, or Apps to either
   bypass list.
4. `Dependabot` does not require bypass access. It opens a normal pull request into `release/dev`
   and must pass the same checks.
5. CODEOWNERS will request review on sensitive configuration, but the ruleset intentionally does
   not require a human approval.

The pull-request rule is what prevents direct updates while still allowing GitHub to create the
squash merge after all checks pass. Do not add **Restrict updates** with an empty bypass list; that
would also prevent legitimate pull-request merges.

## 6. GitHub repository variables

First create both Vercel projects so their project IDs are available.

1. Go to **Settings → Secrets and variables → Actions**.
2. Open the **Variables** tab.
3. Click **New repository variable**.
4. Add:

   | Name                           | Value                        |
   | ------------------------------ | ---------------------------- |
   | `VERCEL_STAGING_PROJECT_ID`    | Staging Vercel Project ID    |
   | `VERCEL_PRODUCTION_PROJECT_ID` | Production Vercel Project ID |

5. Verify these are variables, not secrets. Vercel project IDs identify a project but are not
   credentials.

Find each Vercel Project ID under **Vercel project → Settings → General → Project ID**.

## 7. GitHub deployment environments and secrets

Create environments named exactly `staging` and `production`.

### 7.1 Create `staging`

1. Go to **Settings → Environments**.
2. Click **New environment**.
3. Enter `staging`, then click **Configure environment**.
4. Do not add required reviewers or a wait timer; the selected policy has no manual approval.
5. Disable **Allow administrators to bypass configured protection rules**, if that control is
   available.
6. Under **Deployment branches and tags**, select **Protected branches only**. The verification
   workflow is read from protected `main`, while its payload independently verifies the deployed
   branch is `release/dev`.
7. Under **Environment secrets**, click **Add secret**.
8. Add `VERCEL_AUTOMATION_BYPASS_SECRET` using the staging project's automation-bypass value.
9. Do not add production application credentials, Resend credentials, Blob tokens, or Turnstile
   secrets.

### 7.2 Create `production`

Repeat the same process with:

- Environment name: `production`.
- Deployment branches: **Protected branches only**.
- No required reviewers or wait timer.
- Administrator bypass disabled.
- A distinct `VERCEL_AUTOMATION_BYPASS_SECRET` from the production Vercel project.

The staging and production bypass secrets must never be equal.

### 7.3 Fallback credentials

Do not add these during the normal Deployment Checks setup. If the Vercel account does not support
the required Deployment Checks flow, add the following only to the corresponding GitHub
environment:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Remove temporary fallback credentials when the fallback promotion is complete.

## 8. Configure the isolated staging Vercel project

1. In Vercel, select the correct team from the team switcher.
2. Click **Add New → Project**.
3. Import `platinumstaffing/landing-page`.
4. Give the project an unmistakable staging name.
5. Open **Project → Settings → General / Build and Deployment**.
6. Configure:
   - Framework preset: Next.js.
   - Node.js version: 24.x.
   - Install command: `pnpm install --frozen-lockfile`.
   - Build command: `pnpm vercel-build`.
7. Open **Settings → Environments → Production → Branch Tracking**.
8. Set the production branch to `release/dev`, then save.
9. Open **Settings → Build and Deployment → Ignored Build Step**.
10. Choose **Custom** or **Run my Node script**, depending on the UI wording.
11. Enter:

    ```text
    node scripts/vercel-ignore-build.mjs staging
    ```

12. Open **Settings → Security** and ensure **Git Fork Protection** remains enabled.
13. Enable **Require Verified Commits** under **Settings → Git** if the account plan exposes it.
14. Open **Settings → Domains** and attach only the staging domain.
15. Open **Settings → Environment Variables** and add staging-specific values:
    - `DEPLOYMENT_TARGET=staging`
    - `NEXT_PUBLIC_SITE_URL=https://<staging-domain>`
    - Staging `RESEND_API_KEY`
    - Staging/test `CONTACT_FROM_EMAIL`
    - Non-customer staging `CONTACT_TO_EMAIL`
    - Staging-only `BLOB_READ_WRITE_TOKEN`
    - Staging `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
    - Staging `TURNSTILE_SECRET_KEY`
16. Apply `DEPLOYMENT_TARGET` and application variables only to the scopes that genuinely require
    them. Never copy a production value into staging or preview.
17. Connect a staging-only Vercel Blob store.
18. Configure the staging Resend account to use a sandbox/test destination.
19. Under **Settings → Deployment Protection**, enable Standard Protection for preview/generated
    deployment URLs.
20. Create a **Protection Bypass for Automation** secret named for GitHub deployment verification.
21. Copy that value once into the GitHub `staging` environment secret from section 7.
22. Copy the staging Project ID into the GitHub repository variable from section 6.

Internal collaborator feature branches may receive staging previews. `main` must be ignored by
this project.

## 9. Configure the isolated production Vercel project

1. Create a second Vercel project from the same repository.
2. Give it an unmistakable production name.
3. Configure Next.js, Node 24.x, frozen install, and `pnpm vercel-build` exactly as staging.
4. Open **Settings → Environments → Production → Branch Tracking**.
5. Set the production branch to `main`.
6. Open **Settings → Build and Deployment → Ignored Build Step**.
7. Set:

   ```text
   node scripts/vercel-ignore-build.mjs production
   ```

8. Keep **Settings → Security → Git Fork Protection** enabled.
9. Enable **Require Verified Commits** under **Settings → Git** if available.
10. Attach only the real production domain under **Settings → Domains**.
11. Add production-only environment values to the **Production** scope:
    - `DEPLOYMENT_TARGET=production`
    - `NEXT_PUBLIC_SITE_URL=https://<production-domain>`
    - Production `RESEND_API_KEY`
    - Verified production `CONTACT_FROM_EMAIL`
    - Real internal `CONTACT_TO_EMAIL`
    - Production-only `BLOB_READ_WRITE_TOKEN`
    - Production `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
    - Production `TURNSTILE_SECRET_KEY`
12. Do not expose production application values to Preview, Development, staging, or GitHub.
13. Connect a production-only Blob store.
14. Confirm public source maps remain disabled by `next.config.ts`.
15. Configure Deployment Protection for generated deployment URLs.
16. Create a distinct production **Protection Bypass for Automation** secret.
17. Copy it into the GitHub `production` environment.
18. Copy the production Project ID into the GitHub repository variable.

The production project's ignored-build command must cancel every non-`main` branch.

## 10. Configure blocking Vercel Deployment Checks

Complete this separately in both Vercel projects.

1. Confirm the repository is connected through the Vercel GitHub integration.
2. Enable Vercel repository-dispatch events for the project if the integration presents that
   option.
3. Open **Project → Settings → Environments → Production**.
4. Confirm automatic production aliasing is enabled.
5. Find **Deployment Checks** and click **Add Checks**.
6. For staging, select the GitHub status named:

   ```text
   Vercel - staging runtime verification
   ```

7. For production, select:

   ```text
   Vercel - production runtime verification
   ```

8. Mark the selected check as required/blocking.
9. Trigger a production-target deployment in each isolated project.
10. Confirm Vercel creates the deployment but does not move the domain alias while the check is
    pending.
11. Confirm the `Deployment Verification` GitHub workflow runs from the
    `vercel.deployment.ready` repository-dispatch event.
12. Confirm it validates the project ID, repository, protected branch, environment, full commit
    SHA, branch ancestry, and immutable `vercel.app` URL before tests use the bypass secret.
13. Confirm the workflow runs:
    - Chromium Playwright smoke tests.
    - Axe accessibility checks.
    - Runtime security-header assertions.
    - Lighthouse accessibility, SEO, best-practice, performance, script, and image budgets.
    - OWASP ZAP baseline.
14. Confirm the domain alias moves only after the check succeeds.
15. Do not use **Force Promote** during normal delivery. It bypasses Deployment Checks.

If **Deployment Checks** or **Add Checks** is unavailable on the selected Vercel account, use the
fallback credentials in section 7 to create an unaliased deployment, run the same verification
workflow against its immutable URL, and promote only that verified deployment. Never run
`vercel --prod` from a feature branch or developer workstation.

## 11. Acceptance tests

Run these after the workflows exist on both long-lived branches and both rulesets are active:

1. Open a collaborator pull request from an internal feature branch to `release/dev`.
   - Expected: all eight required checks run.
   - Expected: merge is blocked until every check succeeds and the branch is up to date.
2. Open a pull request to `main` from an internal branch other than `release/dev`.
   - Expected: `pr-policy` closes it with the production-source explanation.
3. Open or simulate a fork/non-collaborator pull request.
   - Expected: it is closed.
   - Expected: no checkout, install, build, or test job executes its code.
4. Attempt a direct push to `release/dev` and `main`.
   - Expected: GitHub rejects both.
5. Attempt a force push and branch deletion.
   - Expected: GitHub rejects both.
6. Open a valid same-repository `release/dev` → `main` pull request.
   - Expected: all eight checks run.
   - Expected: no human approval is required.
   - Expected: squash is the only merge method.
7. Trigger Dependabot.
   - Expected: its pull requests target `release/dev`.
   - Expected: it receives no Vercel or ordinary GitHub environment secret.
8. Deliberately fail a lint or smoke check on a disposable branch.
   - Expected: merge remains blocked.
9. Deliberately fail a staging runtime verification.
   - Expected: the previous staging alias remains active.
10. Deliberately fail a production runtime verification.
    - Expected: the previous production alias remains active.
11. Verify staging builds `release/dev` and approved internal previews, but not `main`.
12. Verify production builds only `main`.

## 12. Rollback and recovery

1. Open the affected Vercel project.
2. Open **Deployments**.
3. Find the most recent immutable deployment that passed runtime verification.
4. Open its actions menu.
5. Choose **Promote to Production** or **Instant Rollback**, depending on the UI.
6. Confirm the domain now resolves to the prior verified deployment.
7. Run the `Deployment Verification` workflow against that immutable deployment.
8. Revert the faulty source change through the normal pull-request path:
   `feature/revert → release/dev → main`.
9. Record the incident and corrective action in `docs/DECISIONS.md`.

Do not delete the failed deployment, rebuild an older commit, change DNS, or bypass the protected
branch as the first rollback step. Re-promoting the last verified immutable deployment is faster,
preserves evidence, and avoids introducing a different artifact during an incident.
