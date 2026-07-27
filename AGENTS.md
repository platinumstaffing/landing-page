# AGENTS.md — Platinum Staffing & Recruitment

Permanent operating instructions for any agent working in this repository. Read this
and [MASTER_BUILD_INSTRUCTIONS.md](MASTER_BUILD_INSTRUCTIONS.md) before making changes.

## Project

A premium marketing website for Platinum Staffing & Recruitment, a Pennsylvania workforce
solutions firm serving employers and job seekers across manufacturing, warehouse &
distribution, logistics, administrative support, customer service, and light industrial.

## Sources of truth (in priority order)

1. `MASTER_BUILD_INSTRUCTIONS.md` — engineering + design law.
2. `Platinum_Staffing_Brand_Identity_Website_Experience_Stylish.pdf` — brand palette,
   typography, voice, positioning. NOTE: the `.md` extraction of this PDF is lossy and is
   missing the color/typography section. Trust the PDF.
3. `Website Details_ Platinum Staffing.md` — copy deck and information architecture.
4. `Website & Logo.pdf` — page mockups + logo construction (rendered to
   `docs/reference/mockups/`). Treat as visual reference only; see `docs/DECISIONS.md`
   for where we intentionally diverge.

When sources conflict, the written docs beat the mockups. See `docs/DECISIONS.md`.

## Stack

- Next.js 16 (App Router, RSC by default), React 19, TypeScript strict
- Tailwind CSS v4 (CSS-first `@theme` in `src/app/globals.css`)
- shadcn/ui (radix base) — components are owned source in `src/components/ui`
- Motion (`motion`) v12 — the ONLY animation library
- Forms: react-hook-form + zod + Server Actions; Resend for delivery; Vercel Blob for uploads
- Package manager: pnpm

## Hard rules

- NO Lucide icons. Use `@phosphor-icons/react/dist/ssr`. Icons clarify meaning; do not put
  one above every heading or inside a circle on every card.
- NO Inter as body font, NO purple→blue gradients, neon, glassmorphism, blobs, fake stats,
  fake testimonials, or fake company logos. (MASTER §24)
- Do NOT fabricate content: no invented client names, placements, testimonials, awards,
  certifications, locations, or job openings. Unknown data lives in `docs/CONTENT_GAPS.md`.
- Semantic color tokens only — no raw hex in components. See `docs/DESIGN_SYSTEM.md`.
- Every form must have real validation and loading/success/error states. Never fake a
  successful submission.
- Target WCAG 2.2 AA. Accessibility is not a cleanup task.
- Respect `prefers-reduced-motion`. Motion supports comprehension; it does not delay reading.

## Commands

```bash
pnpm dev         # local dev (Turbopack)
pnpm build       # production build
pnpm start       # serve production build
pnpm lint        # eslint
pnpm typecheck   # tsc --noEmit
```

## Handoff

At the end of a substantial session, update `docs/IMPLEMENTATION_STATUS.md`,
`docs/DECISIONS.md`, and `docs/CONTENT_GAPS.md`. Never mark work complete while major
parts are placeholders.
