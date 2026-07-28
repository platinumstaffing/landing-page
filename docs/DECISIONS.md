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
- **Photography boundary:** Eleven labelled SVG art-direction frames reserve final crops without
  fabricating people or workplaces. `docs/HOMEPAGE_IMAGE_PROMPTS.md` defines the replacement assets.
- **Consequence:** D11 supersedes D10 for the homepage. The old hero and WebGL canvas components are
  removed rather than retained as dead fallback code.
