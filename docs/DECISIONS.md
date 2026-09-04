# Decision Log

## D1 — Body typeface: Libre Franklin instead of Inter

- **Context:** Brand PDF specifies Manrope (headings) + Inter (body). MASTER §12 explicitly says
  "Do not automatically use Inter" and warns against generic AI-SaaS output.
- **Decision:** Keep Manrope for display; use **Libre Franklin** for body. Client sign-off requested.
- **Alternatives:** Honor Inter exactly; go fully editorial serif/grotesk.
- **Rationale:** Franklin Gothic lineage reads American-industrial and editorial, fits the tri-state /
  manufacturing audience, and reads intentional rather than templated. Body face is a one-file swap.
- **Consequence:** A temporary `/type-specimen` route lets the client compare before final lock.

## D2 — Static-first architecture, no database/CMS/admin

- **Context:** The content doc describes a job board, applications, resume uploads, a resource
  library, and internal admin tooling. MASTER §4 says don't add a backend unless required.
- **Decision:** Jobs and articles live in typed local content files. Forms submit via Server
  Actions to Resend; resumes upload to Vercel Blob. No DB, no CMS, no auth, no admin UI.
- **Rationale:** Ships a credible, complete marketing site now with a clean, documented
  integration boundary (`src/lib/submissions.ts`) so a DB/ATS can be added later without rework.
- **Consequence:** Internal admin requirements are documented as a boundary, not built.

## D3 — Written docs override the mockups on facts

The `Website & Logo.pdf` mockups contain placeholder/contradictory data. Authoritative values:

- **Founded 2019** (mockup "About" shows 2010 — wrong).
- **Location: the tri-state region** (Pennsylvania, New Jersey, and New York). The copy deck
  originally said Pennsylvania; D25 supersedes that marketing geography. Mockups' Memphis/Nashville,
  TN and a `(615)` phone remain placeholder.
- **Core values: Integrity, Partnership, Excellence, Responsiveness, Opportunity** (brand PDF).
  The mockup's Respect/Accountability/Teamwork/Innovation set is not used.
- **Stats: 2019, 40,000+ network, 10,000+ placements, 6+ industries** — supplied by client, safe.

## D4 — No third-party employer logos

- **Context:** Mockups show a "Trusted by Employers" strip with Caterpillar, FedEx, Amazon, GXO,
  Lowe's, Walmart, UPS, Dollar General — and Randstad (a competitor). Unverified.
- **Decision:** Build the band to read from `src/content/employers.ts`; ship it empty so the
  section self-hides until the client supplies a verified, permissioned partner list.
- **Rationale:** MASTER §24 forbids fake company logos.

## D5 — Rebuild the mockups' execution, keep their structure

- **Context:** Mockups are visually generic (icon-in-circle on every card, floating drop-shadow
  cards, browser chrome) — patterns MASTER §24 prohibits.
- **Decision:** Keep the IA, section order, palette, and conversion structure; rebuild the visual
  execution per BRAND_DIRECTION (hairlines over shadows, restrained icon use, navy structural bands).

## D6 — Icon system: Phosphor via SSR entry

- **Decision:** `@phosphor-icons/react/dist/ssr`. Lucide removed from the project. shadcn-generated
  components were rewritten to use Phosphor (CaretDown/Up, Check, X).
- **Rationale:** MASTER §6 bans Lucide; SSR entry is lighter and RSC-friendly.

## D7 — shadcn token vocabulary retained, brand tokens layered on top

- **Decision:** Map shadcn's tokens (primary, secondary, muted, accent, border, ring, etc.) to the
  brand palette in `globals.css`, and add brand-named aliases (navy, silver, surface, success).
- **Rationale:** 12 generated components depend on shadcn's token names; remapping them to brand
  values satisfies MASTER §D (semantic tokens, no scattered hex) without forking every component.
- **Note:** shadcn's `--primary` = Executive Purple. shadcn's `--accent` is a quiet hover surface,
  NOT the brand "accent"; the brand accent purple is `--primary`.

## D8 — Resume uploads via Server Action + `put()`, not client tokens

- **Decision:** Résumé files upload through `uploadResumeAction` using `@vercel/blob` `put()` with
  `access: "private"`, MIME/size checks, and random suffixes.
- **Rationale:** Simpler and safer than wiring the client upload handshake for this slice; still
  uses Vercel Blob as planned.

## D9 — Spam gate: honeypot now, Turnstile when configured

- **Decision:** Forms use a honeypot field (`website`). Timing-based client gates were dropped to
  satisfy React Compiler purity/ref rules. Cloudflare Turnstile remains env-gated for a later pass
  (`NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` in `.env.example`).

## D10 — Homepage hero: GSAP + WebGL, overriding the Motion-only rule

- **Context:** AGENTS.md hard rule states Motion v12 is the only animation library. The homepage
  hero was directed (client request) to be a full-bleed, page-filling pinned hero with a
  cinematic scroll handoff, explicitly authorizing GSAP or WebGL for this surface.
- **Decision:** For the hero **only**, add `gsap` + `@gsap/react` (ScrollTrigger pin + intro
  choreography) and `ogl` (a ~10kb WebGL renderer). The image runs through a navy **duotone +
  film-grain** shader (`src/components/motion/hero-canvas.tsx`) with a subtle scroll parallax.
  The rest of the site stays on Motion v12.
- **Alternatives:** Motion-only sticky hero (declined: wanted GPU treatment to brand the photo);
  CSS scroll-driven animations (declined: pin + shader needed JS/WebGL).
- **Rationale:** The duotone brands off-palette photography toward the Platinum navy world and
  enforces the Flat-Navy / signature-restraint rules on imagery. GSAP ScrollTrigger is the
  reliable tool for pinning + scrubbed handoff.
- **Consequence / guardrails:** Progressive enhancement is mandatory — a CSS-treated `<img>`
  (grayscale + navy multiply + vignette) is the SSR/LCP layer and the fallback if WebGL fails;
  grain and parallax are disabled under `prefers-reduced-motion`; the WebGL loop pauses when the
  hero is off-screen. The H1 remains real SSR text. If a future audit wants to drop the extra
  deps, the hero can fall back to the Motion-only sticky variant without touching other sections.

## D11 — Industrial Field Journal homepage supersedes the WebGL hero

- **Context:** The follow-up homepage direction prioritizes an employer-first editorial narrative,
  authentic workplace photography, fast comprehension, and a lighter interaction model.
- **Decision:** Replace the pinned WebGL hero and generic SaaS stock image with an asymmetric,
  image-led hero and seven supporting editorial beats. Motion v12 is again the only animation
  library; `gsap`, `@gsap/react`, and `ogl` are removed.
- **Rationale:** The page now earns distinction through typography, pacing, photography, and
  industry-specific interaction rather than a shader. This improves content access, reduces the
  client bundle, and returns the implementation to the repository's default motion law.
- **Photography boundary:** Twelve labelled SVG art-direction frames reserve final crops without
  fabricating people or workplaces. `docs/HOMEPAGE_IMAGE_PROMPTS.md` defines the replacement assets.
- **Consequence:** D11 supersedes D10 for the homepage. The old hero and WebGL canvas components are
  removed rather than retained as dead fallback code.

## D12 — Motion SVG journey foundation; superseded artwork noted in D15

- **Context:** The employer process needed a more playful horizontal journey with rounded cards,
  a non-linear connector, hover/click affordances, and a detail modal. Lottie was considered for
  the five process illustrations.
- **Decision:** Build the interaction with five small custom SVG vignettes animated by the
  existing Motion runtime. Each card is a semantic button and opens a Radix/shadcn dialog
  containing the approved process copy. The connector draws once in sequence and becomes static
  under reduced motion.
- **Rationale:** A coherent five-file Lottie set does not yet exist. Pulling unrelated animation
  assets would add visual inconsistency, network weight, and another runtime without improving
  comprehension. The SVG approach is art-directed to the brand, accessible, and inexpensive.
- **Future boundary:** Lottie remains acceptable only when five coordinated production assets are
  supplied and tested for reduced motion, loading failure, keyboard behavior, and bundle impact.
- **Status:** The abstract vignette artwork in this decision was superseded by the supplied
  illustrations in D15. The semantic buttons, dialogs, Motion route, and reduced-motion behavior
  remain the interaction foundation.

## D13 — Industrial Field Journal expands across the marketing site

- **Context:** The homepage established a stronger employer-first editorial language, while inner
  pages still opened with generic split heroes and repeated catalogue cards.
- **Decision:** Introduce one shared asymmetric page-hero primitive and apply it to About,
  Employers, Industries, Job Seekers, Jobs, Contact, and Resources. Extend the same language to
  shared section headings, link surfaces, legal introductions, spacing, and final CTAs.
- **Rationale:** Reusing principles—large type contrast, production-line hairlines, indexed
  structure, restrained purple, and flat navy—creates cohesion without cloning the homepage
  section-by-section.
- **Consequence:** Routes, forms, facts, content boundaries, and conversion destinations remain
  unchanged. The `type-specimen` utility route remains intentionally outside the marketing system.

## D14 — Preserve supplied image geometry

- **Context:** The delivered homepage photography is consistently 1152 × 1536 portrait, while the
  original art-direction manifest reserved several landscape frames. Using `object-cover` hid
  meaningful portions of every image, and the placeholder caption exposed implementation metadata
  beneath the artwork.
- **Decision:** Update the manifest to the real 3:4 geometry, render each complete image with
  centered `object-contain`, and remove the visible label/aspect-ratio footer. Partnership
  illustrations retain their near-4:3 source geometry in a separate typed manifest.
- **Consequence:** The supplied artwork is displayed without cropping. Layouts now respond to the
  files that exist rather than preserving obsolete placeholder proportions.
- **Status:** Superseded by D16 after the photography was resized into its intended art-directed
  aspect ratios.

## D15 — Partnership illustrations supersede abstract step glyphs

- **Context:** Five coordinated 2400 × 1792 journey illustrations were supplied from the approved
  prompt system.
- **Decision:** Replace the abstract Motion glyphs with the full illustrations in both the cards
  and their dialogs. Keep the connector as code-rendered SVG so it remains crisp, responsive, and
  reduced-motion aware.
- **Consequence:** Desktop uses a dedicated curved track beneath the complete card row, with
  anchored stems, waypoints, and a directional finish. Smaller screens use a vertical route with
  branches and waypoints into each card. D15 supersedes the abstract-glyph artwork in D12 while
  retaining its accessible dialog behavior.

## D16 — Restore intended homepage image formats

- **Context:** The twelve workplace photographs were re-exported into the format families defined
  by `docs/HOMEPAGE_IMAGE_PROMPTS.md`.
- **Decision:** Restore the 16:10 hero, 4:5 employer partnership, 4:3 industry/staffing, and 3:2
  candidate/resource frames. Record the delivered intrinsic dimensions in the image manifest and
  use the prompt-defined focal points with `object-cover`.
- **Rationale:** The source compositions now account for their final frames, so the editorial
  layouts can regain their intended horizontal rhythm without hiding important subject matter.
- **Consequence:** D16 supersedes the temporary all-portrait treatment in D14. The implementation
  still omits all placeholder labels and aspect-ratio captions.

## D17 — Proven Scale becomes an open measurement rail

- **Context:** The four equal navy metric cells still read as a boxed dashboard component inside
  an otherwise editorial homepage.
- **Decision:** Remove the outer card frame and individual filled cells. Present the four verified
  facts as a stepped open ledger using only horizontal measurement rules, registration ticks,
  indexed labels, varied column spans, and large tabular values.
- **Rationale:** The facts remain immediately scannable while the section gains the visual rhythm
  of an industrial annual report instead of a generic stat-card grid.
- **Consequence:** Desktop alternates two vertical baselines. Mobile returns to one clear linear
  sequence, with no hover or motion dependency.

## D18 — Sitewide photography expands through a controlled production map

- **Context:** The redesigned inner pages currently rely mostly on typography, rules, and content
  surfaces. The user requested substantially more imagery and generation guidance.
- **Decision:** Use `docs/SITEWIDE_IMAGE_PROMPTS.md` as the production map for 37 additional
  photographs across About, Employers, Industries, Job Seekers, Jobs, Contact, and Resources.
- **Rationale:** A filename, size, aspect ratio, focal point, placement, prompt, and alt-text draft
  for every asset lets photography be added intentionally without turning the site into an
  unrelated stock-image catalogue.
- **Boundary:** Generated leadership headshots remain prohibited. Named leaders require real,
  commissioned photography.

## D19 — Fail-closed promotion through isolated Vercel projects

- **Context:** Staging and production require different trust boundaries, credentials, data stores,
  domains, and release branches. Local hooks alone cannot enforce repository policy.
- **Decision:** Promote collaborator changes through pull requests to `release/dev`, verify the
  resulting immutable staging deployment, then accept only a same-repository `release/dev` pull
  request into `main`. A separate production Vercel project builds only `main`; its domain is
  promoted only after runtime verification. Fork and non-collaborator pull requests are closed by
  a metadata-only workflow that never executes their code. Dependabot may target `release/dev`.
- **Enforcement:** Both long-lived branches require the tracked checks, strict up-to-date pull
  requests, resolved conversations, and linear history, with no bypass actors. Signed commits are
  not required because the current collaborator signing key cannot be recovered; PR-only updates
  and required checks remain mandatory. Full-SHA-pinned Actions, CodeQL, dependency review/audit,
  Secretlint, actionlint, zizmor, Playwright/axe, Lighthouse, ZAP, and CycloneDX SBOMs form the
  delivery evidence.
- **Boundary:** GitHub rulesets and Vercel project settings require owner/admin application using
  `docs/CI_CD_OWNER_RUNBOOK.md`. Human approval is not required. HSTS remains deferred until every
  production subdomain is confirmed permanently HTTPS.

## D20 — Dependabot batch: accept compatible bumps, ignore breaking majors

- **Context:** Dependabot opened Actions pins plus npm majors (TypeScript 7, ESLint 10,
  `@types/node` 26) against `release/dev`. Several npm PRs also failed `format:check` because
  Prettier touched regenerated `pnpm-lock.yaml`.
- **Decision:** Consolidate compatible updates (React 19.2.8, Actions pins, `@types/node` ^24) via
  a single PR; reject TypeScript ≥7 and ESLint ≥10 until Next/`eslint-config-next` support them;
  keep `@types/node` on the Node 24 line; ignore `pnpm-lock.yaml` in Prettier; pin transitive
  medium advisories (`uuid`, `@hono/node-server`) with `pnpm-workspace.yaml` overrides (pnpm 11
  no longer reads `package.json#pnpm.overrides`).
- **Consequence:** `.github/dependabot.yml` ignores those breaking ranges so noise does not
  reopen. Security alerts on CI-only tooling clear once the override lockfile lands on
  `release/dev`.

## D21 — Dependabot triage: consolidate bumps, pin patched transitives, dismiss unpatched CI-only

- **Context:** Seven open Dependabot version-update PRs against `release/dev` were mostly blocked
  by `pnpm security:audit` failing on production HIGH advisories in `fast-uri` and `nanoid`. No
  Dependabot security-update PRs were opened for the open GitHub alerts. Split CodeQL Action pins
  (`init` vs `analyze`) break `security-codeql`. `@types/node` 26 conflicts with `engines.node`.
- **Decision:** Close the seven Dependabot PRs. Land one human PR that (1) pins patched
  transitives in `pnpm-workspace.yaml` overrides — `fast-uri >=3.1.5`, `nanoid >=3.3.17 <4`,
  `hono >=4.12.34`, `js-yaml@3`/`js-yaml@4` to 3.15.1/4.3.1 — (2) applies compatible npm and
  Actions bumps (including CodeQL `init`+`analyze` on the same SHA), and (3) dismisses
  `extract-zip` alert #14 as tolerable risk (no patched release; transitive via `@lhci/cli` /
  Puppeteer browser extraction only — not used for user uploads). Keep motion on the 12.x line
  (do not accept a major via `--latest`).
- **Consequence:** Production audit stays green; Security tab clears after squash-merge into
  `release/dev` and promotion to `main`. Revisit `extract-zip` when ≥2.0.2 ships.

## D22 — One Request Talent form with service prefill

- **Context:** Client review asked whether each employer/industry landing page should have a
  separate inquiry form or one centralized form with a required service dropdown.
- **Decision:** Keep a single Request Talent form on `/contact` (Resend + Server Action). Require
  a Staffing Service field and prefill it from `?service=` (and optional `industry=`) query
  params. Categorize the Resend email subject as
  `[Request Talent] {Service} — {Company}`.
- **Rationale:** Six separate forms would duplicate validation, spam gates, success states, and
  inbox routing. One form preserves a single admin path while still sorting inquiries by service.
  Google Forms is not adopted; Resend remains the delivery boundary.
- **Consequence:** Landing-page CTAs deep-link to `/contact?service=…#request-talent` (and
  industry pages use `?industry=`). Future Sheets/Zapier sorting can key off the subject line.

## D23 — Section-family heroes without a second palette

- **Context:** Client review asked for distinct visual identities across major sections and
  landing pages while preserving brand cohesion.
- **Decision:** Extend `EditorialPageHero` with `tone` (`canvas` | `muted` | `navy`), optional
  documentary `image`, and a hairline production-line `banner` (family + page). Differentiate
  pages with existing homepage photography, flat navy bands, and banners — not new accent hues
  or generated imagery.
- **Rationale:** Rare Signature and Flat Navy forbid inventing per-page accent colors. Reusing
  art-directed photography and structural tones keeps the Industrial Field Journal language
  cohesive while making section changes immediately readable.
- **Consequence:** Six employer and six industry landings share one template; siblings alternate
  canvas/muted tones and unique banners/images. Overview catalogues link to dedicated pages
  instead of long hash-only articles.

## D24 — Accept TypeScript 6 and Motion 13; one-time merge-commit sync

- **Context:** Five open Dependabot PRs (#32, #33, #35, #36, #37) targeted `release/dev` while
  promotion PR #39 (`release/dev` → `main`) was blocked by squash-history divergence: `main` still
  merges from an older squash of `release/dev` (#3), so a 3-way merge conflicted across product and
  docs files. Linear-history + squash-only rulesets forbade merging `main` into `release/dev` with
  a merge commit. D21 had kept Motion on 12.x; D20 already allowed TypeScript 6 (ignored only ≥7).
- **Decision:** Temporarily allow a merge commit on `release/dev`, merge `main` into `release/dev`
  preferring `release/dev` content for conflicts (main’s unique dep pins already landed via #23),
  and batch compatible Dependabot bumps in the same sync: CodeQL `init`+`analyze` on SHA
  `5595cca` (v4.37.6), zizmor-action `3dc1ecc` (v0.6.2), TypeScript ^6.0.3, Motion ^13.0.0.
  Close the five Dependabot PRs as superseded. After promoting #39 to `main`, merge `main` back
  into `release/dev` once more, then restore squash-only + required linear history.
- **Rationale:** A merge commit is the only way to make `main` an ancestor of `release/dev` without
  ruleset bypass. Motion 13’s breaking change (optional `@emotion/is-prop-valid`) does not affect
  this codebase’s `motion.div` / `li` / `article` usage. TypeScript 6 stays within D20’s allowed
  range and is already supported by Next.js 16.
- **Consequence:** Dependabot PRs #32–#37 close without individual merges. Promotion #39 becomes a
  clean squash into `main`. Revisit Motion majors only when usage patterns change.

## D25 — Service area is the tri-state region, not Pennsylvania alone

- **Context:** The copy deck, AGENTS.md, and D3 framed the firm as Pennsylvania-based. The client
  confirmed operations also cover New Jersey and New York. Marketing copy had already been
  de-emphasized; remaining runtime PA language lived in `siteConfig`, the footer, JSON-LD
  `areaServed`, sample jobs, the résumé form default, and legal drafts.
- **Decision:** Marketing geography is **the tri-state region**. `siteConfig.region` is the inline
  phrase; `regionLabel` is the standalone label; `areaServed` is
  `["Pennsylvania", "New Jersey", "New York"]` and JSON-LD emits State objects. Sample jobs spread
  across the three states. The résumé form no longer defaults to `PA`. Privacy drafts name
  applicable U.S. state privacy laws including PA/NJ/NY. Terms governing law is a counsel
  placeholder because a contract must name one jurisdiction, not a region. The client copy deck
  and brand PDF are not rewritten; this decision records the divergence.
- **Rationale:** Naming the three states is more honest than a PA-only claim, and splitting
  inline/label phrasing keeps the footer from reading "partnerships across Pennsylvania" or a
  bare "the tri-state region" as a location chip.
- **Consequence:** A unit test fails if `Pennsylvania` or standalone `PA` appears in `src/`
  outside an explicit allowlist. Dropdown IA is also expanded so every nav child is a real route
  (hub + standalone pages) rather than hash anchors on the parent.

## D26 — Retry production audit on npm registry timeouts

- **Context:** PR Security failed `pnpm security:audit` with `TimeoutError` / `error (23)` against
  `registry.npmjs.org/-/npm/v1/security/advisories/bulk`. pnpm already retried twice; the job still
  exited 1, which is the same code used for real HIGH advisories.
- **Decision:** `pnpm security:audit` runs `scripts/security-audit.mjs`, which retries transient
  registry/network failures and still fails immediately on advisory findings. A completed audit
  that reports `vulnerabilities found` is never retried, even if pnpm logged a timeout warning
  first. `fast-uri` is pinned to `>=4.1.3` so the current 4.1.2 HIGH advisories do not fail a
  successful registry response.
- **Rationale:** A flaky npm advisory API should not block an otherwise clean PR. High and critical
  production advisories remain blocking.
- **Consequence:** The Security workflow can take a few extra minutes when the registry is slow.
  Persistent registry outages still fail the job after four attempts.
