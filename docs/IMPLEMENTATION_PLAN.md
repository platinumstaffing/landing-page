# Implementation Plan

## Phases

1. **Foundation** — docs, scaffold (Next 16 + TS + Tailwind v4 + shadcn), Phosphor, tokens.
2. **Design system** — brand tokens, fonts, layout primitives, restyled UI primitives.
3. **Shell** — header (dropdown nav + persistent CTAs), mobile sheet, skip link, navy footer.
4. **Content layer** — typed content from the content doc.
5. **Homepage** — full vertical slice per brand PDF section order.
6. **Core pages** — /employers, /industries, /job-seekers, /jobs, /contact.
7. **Forms** — Request Talent, Submit Résumé, Contact: RHF + zod + Server Actions + Resend + Blob.
8. **SEO + a11y** — metadata, OG, sitemap, robots, JSON-LD, not-found/error, WCAG 2.2 AA sweep.
9. **Refinement** — Impeccable pass, then Emil Kowalski motion pass (reduced-motion).
10. **Validation + handoff** — build/typecheck/lint, responsive/contrast/keyboard, update status.

## Dependencies

- Tokens block everything visual. Shell + content layer block the pages. Forms depend on the
  submissions boundary + validation schemas. Refinement runs after pages exist.

## Priorities (vertical slice)

Global shell → Home → Employers → Industries → Job Seekers → Jobs → Contact, each shipped as a
complete responsive slice with real content and interaction states.

## Acceptance criteria

- `pnpm build`, `pnpm typecheck`, `pnpm lint` pass with no errors.
- No horizontal overflow 320–1920px; visible focus; keyboard operable; reduced-motion respected.
- No fabricated content; placeholders explicitly marked in CONTENT_GAPS.
- Forms exercise loading/success/validation-error/failure states honestly.

## Risks

- **Missing content/assets** (photography, real contact details, legal copy) — mitigated by
  honest brand-graphic placeholders + self-hiding sections + CONTENT_GAPS tracking.
- **shadcn token coupling** — mitigated by remapping tokens to brand values centrally.
- **Body-font sign-off** — mitigated by `/type-specimen` and a one-file swap.
