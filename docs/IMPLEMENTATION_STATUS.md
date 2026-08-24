# Implementation Status

_Last updated: Sync main into release/dev (D24) + TypeScript 6 / Motion 13 / Actions pins._

## Completed

- Repository + brand discovery; mockups rendered to `docs/reference/mockups/`.
- Project documentation (`AGENTS.md`, `docs/*`).
- Scaffold: Next.js 16 + TS strict + Tailwind v4 + shadcn (radix base); Phosphor icons;
  Lucide removed.
- Design tokens + Manrope / Libre Franklin fonts (literal family names in `@theme`).
- Layout primitives + restyled Button hierarchy.
- Logo assets: transparent lockup + mark, favicons, OG image.
- Global shell: sticky header with dropdowns, mobile Sheet, skip link, Deep Navy footer.
- Typed content layer (`industries`, `solutions`, `process`, `stats`, `faqs`, `jobs`, empty `employers`).
- Homepage vertical slice (hero → trusted-by self-hide → impact → why → careers → industries →
  solutions → process → resources → final CTA).
- Core pages: `/employers`, `/industries`, `/job-seekers`, `/jobs` (searchParams filters), `/contact`.
- **Six employer-service landings** (`/employers/[slug]`) and **six industry landings**
  (`/industries/[slug]`) from the approved copy deck, with shared templates, distinct heroes,
  banners, and Request Talent deep-links.
- Forms: Request Talent, Submit Résumé (Blob upload), General Contact — RHF + zod + Server Actions
  - Resend boundary + honeypot. Honest loading/success/error states. Request Talent now requires a
    Staffing Service field and prefills from `?service=` / `?industry=` (D22).
- SEO: metadata, OG, sitemap (includes all 12 landings), robots, Organization JSON-LD; `not-found` +
  `error`.
- Motion: Reveal + AnimatedStat with reduced-motion support.
- Legal pages built via a shared `LegalPage` layout: `/accessibility` is a real, indexable
  statement (truthful to the site's a11y posture); `/privacy` and `/terms` are grounded drafts,
  `noindex`, with a "pending legal review" banner and `[bracketed]` items for counsel.
- Validation: `pnpm lint`, `pnpm typecheck`, `pnpm build` all pass.
- Production CI/CD: pinned Node/pnpm, frozen installs, Prettier, ESLint, TypeScript, Vitest,
  Knip, Playwright/axe, Lighthouse, Secretlint, production audit, CodeQL, Dependency Review,
  actionlint, zizmor, weekly browser/security runs, CycloneDX SBOMs, and retained diagnostics.
- Release protection: metadata-only collaborator/source policy, tracked no-bypass rulesets for
  `release/dev` and `main`, CODEOWNERS, Dependabot targeting `release/dev`, and tiered Lefthook
  pre-commit/pre-push controls.
- Isolated Vercel delivery: environment validation, staging/production branch filters, hardened
  response headers, immutable deployment identity checks, Playwright/Lighthouse/ZAP verification,
  and owner runbook for protected promotion and rollback.
- Fonts are self-hosted as licensed, subsetted WOFF2 assets. The internal `/type-specimen` route
  and its external font dependency were removed.

## Client review pass (this session)

- Homepage supporting statement updated to the approved sentence; Pennsylvania de-emphasized in
  marketing copy (hero, header, About vision/hero, FAQs, metadata) while legal/org facts remain.
- Vision Statement updated to the client-approved non-geo wording.
- Job Seekers Career Center now emphasizes Search Jobs, Submit Résumé, Application Process, and
  Contact Us; direct “contact a recruiter” invitation language removed; résumé upload notes private
  Vercel Blob storage.
- `EditorialPageHero` extended with tone, optional photography, and page banners (D23).
- Employer and industry overview pages are catalogues linking to dedicated landings; industry
  cards use documentary photography instead of icons-in-circles.

## Impeccable design pass (prior)

- Added `PRODUCT.md` + `DESIGN.md` (+ `DESIGN.json`) design context; pointer in `AGENTS.md`.
- Homepage rebuilt as an eight-beat Industrial Field Journal narrative: employer-first hero,
  credibility ledger, employer proof, interactive industries, workforce blueprint, candidate
  pathway, resource desk, and conversion close.
- The prior GSAP-pinned WebGL hero has been retired. Motion is again the sole animation
  library, and the generic SaaS hero image is no longer used.
- Navbar polish: wider/taller with a scrolled shrink+shadow, roomier two-column dropdowns,
  desktop nav at `xl` (Sheet below) to remove crowding.
- Global shell restyled with opaque Soft White navigation, production-line hairlines, stronger
  active states, and a typographic employer-first footer.
- Added a typed homepage image manifest, twelve designed art-direction frames, and
  `docs/HOMEPAGE_IMAGE_PROMPTS.md` with production prompts, crops, filenames, alt text, and
  negative prompts.
- Connected all twelve resized workplace WebP assets using the intended prompt-guide formats:
  16:10 hero, 4:5 employer partnership, 4:3 industry/staffing imagery, and 3:2
  candidate/resource imagery. Shared frames use art-directed focal points and omit the former
  label/aspect-ratio footer.
- Increased the homepage hero image footprint on desktop while retaining the approved 16:10 crop,
  focal point, and mobile stacking behavior.
- Replaced the boxed Proven Scale metric grid with a stepped open measurement rail. Verified facts
  now sit on hairline rules with varied spans and responsive linear ordering.
- Added `docs/SITEWIDE_IMAGE_PROMPTS.md`, a 37-asset production guide covering the seven remaining
  marketing pages with exact filenames, dimensions, ratios, placements, prompts, negative
  direction, and alt-text drafts.
- `/about` and `/resources` are now **real pages** built from approved brand copy:
  About (story, mission, vision, core values, honest leadership placeholder, reused
  impact/why/careers sections); Resources (category directory with honest "articles in
  progress" states + useful cross-links). Both added to the sitemap.
- “How the partnership works” is now a five-card interactive journey with a drawn squiggle,
  five supplied full-frame illustrations, hover/focus feedback, and keyboard-accessible detail
  dialogs. A dedicated desktop track uses anchored stems, curved handoffs, waypoints, and a clear
  directional finish; mobile uses one vertical route with branches into every card. Reduced-motion
  visitors receive the complete static artwork immediately.
- The Industrial Field Journal system now extends across `/about`, `/employers`, `/industries`,
  `/job-seekers`, `/jobs`, `/contact`, and `/resources` through a shared asymmetric page hero.
  Shared section headers, story links, page spacing, legal-page introductions, and closing CTAs
  now use the same stronger editorial scale and hairline-first construction.

## Dependabot / security (this session)

- Consolidated open Dependabot version bumps into one PR (D21): production/dev minor-patch npm
  updates, SHA-pinned Actions (`pnpm/action-setup` 6.0.10, `zizmor-action` 0.6.1, CodeQL
  init+analyze 4.37.5 together). Rejected `@types/node` 26 and split CodeQL pins.
- Pinned patched transitives in `pnpm-workspace.yaml`: `fast-uri`, `nanoid` (3.x), `hono`,
  `js-yaml` 3.x/4.x. Production `pnpm security:audit` is clean.
- `extract-zip` (unpatched, Lighthouse/Puppeteer CI-only) dismissed as tolerable risk on GitHub.

## Dependabot sync (D24)

- Merged `main` into `release/dev` (preferring `release/dev` for product/docs conflicts) to
  unblock promotion PR #39 after squash-history divergence.
- Batched Dependabot bumps: CodeQL Action 4.37.6 (init+analyze same SHA), zizmor-action 0.6.2,
  TypeScript ^6.0.3, Motion ^13.0.0. Supersedes Dependabot PRs #32, #33, #35, #36, #37.

## In progress

- Repository-owner application of the tracked GitHub rulesets and Vercel administrator setup.

## Remaining (next pass)

- Job detail (`/jobs/[slug]`) + apply flow.
- Resource article template + real articles per category (directory is live; articles pending).
- Leadership section on `/about` needs real bios + headshots when supplied.
- Legal copy pages once client provides Privacy / Terms / Accessibility counsel review.
- Client may still supply richer industry-specific challenges/FAQ enrichment beyond the
  deck-based pages shipped in this pass.
- Sample jobs with real openings.
- Full service-integrated form E2E for email delivery, Blob upload, and Turnstile remains deferred;
  blocking tests cover safe client/server validation without sending or uploading.

## Blockers / known issues

- See `docs/CONTENT_GAPS.md` (contact details, logos, legal copy, real jobs, leadership).
- Forms return a clear error when Resend / Blob env vars are missing (do not fake success).

## Last validation

- `CI=true pnpm verify` — pass (format, lint, types, 10 unit tests, knip, production build with
  27 routes including 12 dedicated landings)
- `pnpm test:smoke` — pass (41 Chromium tests across route availability, new landings, navigation,
  metadata, responsive overflow, keyboard behavior, safe validation for all three forms,
  console errors, headers, and axe including one solution + one industry page)

## Recommended next action

1. Review the twelve new landings and updated heroes at 390 / 768 / 1280 / 1920.
2. Provide contact details, leadership bio/headshot, and richer industry copy if available.
3. Apply `docs/CI_CD_OWNER_RUNBOOK.md` with repository and Vercel administrator access.
4. Replace sample jobs with real openings before launch.
