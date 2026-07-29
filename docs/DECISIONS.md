# Decision Log

## D1 — Body typeface: Libre Franklin instead of Inter

- **Context:** Brand PDF specifies Manrope (headings) + Inter (body). MASTER §12 explicitly says
  "Do not automatically use Inter" and warns against generic AI-SaaS output.
- **Decision:** Keep Manrope for display; use **Libre Franklin** for body. Client sign-off requested.
- **Alternatives:** Honor Inter exactly; go fully editorial serif/grotesk.
- **Rationale:** Franklin Gothic lineage is American-industrial and editorial, fits the PA /
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
- **Location: Pennsylvania** (mockups show Memphis/Nashville, TN and a `(615)` phone — placeholder).
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
  requests, resolved conversations, signed commits, and linear history, with no bypass actors.
  Full-SHA-pinned Actions, CodeQL, dependency review/audit, Secretlint, actionlint, zizmor,
  Playwright/axe, Lighthouse, ZAP, and CycloneDX SBOMs form the delivery evidence.
- **Boundary:** GitHub rulesets and Vercel project settings require owner/admin application using
  `docs/CI_CD_OWNER_RUNBOOK.md`. Human approval is not required. HSTS remains deferred until every
  production subdomain is confirmed permanently HTTPS.
