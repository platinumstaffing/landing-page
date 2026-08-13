# Implementation Status

_Last updated: Dependabot triage + transitive vulnerability pins (D21)._

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
- Forms: Request Talent, Submit Résumé (Blob upload), General Contact — RHF + zod + Server Actions
  - Resend boundary + honeypot. Honest loading/success/error states.
- SEO: metadata, OG, sitemap, robots, Organization JSON-LD; `not-found` + `error`.
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

## Impeccable design pass (this session)

- Added `PRODUCT.md` + `DESIGN.md` (+ `DESIGN.json`) design context; pointer in `AGENTS.md`.
- Homepage rebuilt as an eight-beat Industrial Field Journal narrative: employer-first hero,
  credibility ledger, employer proof, interactive industries, workforce blueprint, candidate
  pathway, resource desk, and conversion close.
- The prior GSAP-pinned WebGL hero has been retired. Motion v12 is again the sole animation
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

## In progress

- Repository-owner application of the tracked GitHub rulesets and Vercel administrator setup.

## Remaining (next pass)

- Header navigation now uses a continuous hover bridge and short close grace period, preventing
  desktop dropdowns from collapsing as the pointer moves from the trigger to the menu. Dropdowns
  also use a clearer indexed editorial layout.
- The workforce blueprint now gives Staffing Models and its dedicated image a focused first row;
  the interactive partnership journey follows beneath at full width.
- Proven Scale uses a wider ledger container and larger, consistently padded stat cells. The
  candidate pathway explicitly isolates Image 09 beneath an opaque content surface so placeholder
  and final photography cannot cover the adjacent copy.
- 6 employer service detail pages + 6 industry detail pages.
- Job detail (`/jobs/[slug]`) + apply flow.
- Resource article template + real articles per category (directory is live; articles pending).
- Leadership section on `/about` needs real bios + headshots when supplied.
- Legal copy pages once client provides Privacy / Terms / Accessibility.
- Client sign-off on Libre Franklin; replace sample jobs with real openings.
- Full service-integrated form E2E for email delivery, Blob upload, and Turnstile remains deferred;
  blocking tests cover safe client/server validation without sending or uploading.
- Impeccable visual polish pass against live review feedback.
- Added `docs/PARTNERSHIP_JOURNEY_IMAGE_PROMPTS.md`: a coordinated five-asset infographic
  direction with shared route geometry, individual step prompts, negative prompts, alt-text
  drafts, filenames, integration guidance, and a full-width desktop/vertical mobile connector plan.
- Implemented the five supplied Partnership Journey WebP illustrations in the cards and detail
  dialogs. Desktop uses one continuous animated route aligned to each illustration centerline;
  smaller screens use a vertical route with a branch and waypoint into every card.

## Blockers / known issues

- See `docs/CONTENT_GAPS.md` (contact details, logos, legal copy, real jobs).
- Forms return a clear error when Resend / Blob env vars are missing (do not fake success).

## Last validation

- `CI=true pnpm verify` — pass (format, lint, types, 9 unit tests with scoped 100% coverage,
  dependency hygiene, production build)
- `pnpm test:smoke` — pass (27 Chromium tests across route availability, navigation, metadata,
  responsive overflow, keyboard behavior, safe validation for all three forms, console errors,
  headers, and axe)
- `pnpm security:secrets` — pass
- `pnpm security:audit` — pass; no known production vulnerabilities
- actionlint — pass
- zizmor offline audit — pass with no findings; one documented metadata-only trigger exception
- Lighthouse CI — pass against four production routes at accessibility/SEO 1.00, best practices
  ≥0.95, performance ≥0.85, and explicit script/image budgets
- `pnpm build` — pass (15 routes; internal type specimen removed)
- Responsive homepage review — pass at 320, 390, 768, 1280, and 1920 px in the original homepage
  pass; current site-wide route review passes at 1280 px with no horizontal overflow
- Interaction review — partnership cards open accessible dialogs from real button controls;
  dialogs close correctly and return the page to its prior state
- Browser console review — no runtime errors across the primary marketing routes

## Recommended next action

1. Review the new journey and the seven redesigned marketing-page heroes at
   390 / 768 / 1280 / 1920.
2. Apply `docs/CI_CD_OWNER_RUNBOOK.md` with repository and Vercel administrator access.
3. Provide contact details and permissioned partner logos from CONTENT_GAPS.
4. Build deferred detail pages (services, industries, job detail) and service-integrated form E2E.
