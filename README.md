# Platinum Staffing & Recruitment

Marketing website for Platinum Staffing & Recruitment — a tri-state workforce solutions firm.
Built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Getting started

```bash
pnpm install --frozen-lockfile
cp .env.example .env.local   # fill in as needed
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Command                 | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `pnpm dev`              | Start the dev server (Turbopack)                                   |
| `pnpm build`            | Production build                                                   |
| `pnpm start`            | Serve the production build                                         |
| `pnpm format:check`     | Check Prettier formatting                                          |
| `pnpm lint`             | Run ESLint with zero warnings                                      |
| `pnpm typecheck`        | Run strict TypeScript checks                                       |
| `pnpm test:unit`        | Run Vitest with coverage thresholds                                |
| `pnpm test:smoke`       | Run blocking Chromium smoke and accessibility tests                |
| `pnpm test:e2e`         | Run the configured Playwright browser matrix                       |
| `pnpm security:secrets` | Scan tracked content for secrets                                   |
| `pnpm security:audit`   | Block high/critical production advisories; retry registry timeouts |
| `pnpm images:optimize`  | Convert page JPEG sources to spec WebP assets                      |
| `pnpm verify`           | Run the local formatting-to-production-build quality set           |
| `pnpm ci`               | Run `verify` followed by blocking Chromium browser tests           |

Node 24 and pnpm 11.17.0 are pinned. Lefthook installs with dependencies: pre-commit checks staged
formatting, lint, secrets, conflict markers, and file size; pre-push blocks direct updates to
`release/dev` and `main` and runs typecheck, unit tests, and a production build. Hooks are a local
convenience and can be bypassed; GitHub rulesets are the enforcement boundary.

## Delivery

Changes move through `collaborator branch → release/dev → staging → main → production`. Both
long-lived branches accept pull requests only. The metadata-only policy workflow closes fork and
non-collaborator pull requests before their code is checked out, and `main` accepts only the same
repository's `release/dev` branch. Dependabot may target `release/dev`.

Staging and production use separate Vercel projects, domains, Blob stores, credentials, and
environment values. Immutable deployments are smoke-, accessibility-, header-, Lighthouse-, and
ZAP-tested before domain promotion. Repository and Vercel administrators must apply the tracked
settings in [`docs/CI_CD_OWNER_RUNBOOK.md`](docs/CI_CD_OWNER_RUNBOOK.md).

## Documentation

Start with [`AGENTS.md`](AGENTS.md) and the [`docs/`](docs) folder:
brand direction, information architecture, design system, technical architecture,
implementation plan/status, decisions, content gaps, and the QA checklist.
