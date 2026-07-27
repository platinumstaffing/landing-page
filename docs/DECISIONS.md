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
