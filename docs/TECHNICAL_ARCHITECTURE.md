# Technical Architecture

## Stack

- Next.js 16 App Router, React 19, TypeScript strict, pnpm, Turbopack dev.
- Tailwind CSS v4 (CSS-first `@theme`), shadcn/ui (radix base) owned in `src/components/ui`.
- Motion v12 (only animation lib). Phosphor icons (SSR entry).
- Forms: react-hook-form + zod, Server Actions, Resend delivery, Vercel Blob uploads.

## Folder structure

```
src/
  app/
    (marketing)/         # route group for public pages
    layout.tsx           # root: fonts, metadata, skip link, header/footer
    globals.css          # tokens + base
    sitemap.ts, robots.ts
    not-found.tsx, error.tsx
  components/
    layout/              # Container, Section, Footer, primitives
    navigation/          # Header, desktop dropdowns, mobile sheet nav
    sections/            # page section blocks (Hero, Stats, Industries, ...)
    forms/               # form components + fields
    jobs/                # job card, filters, list
    ui/                  # shadcn primitives (brand-restyled)
  content/               # typed content (industries, solutions, jobs, faqs, stats, employers)
  lib/                   # utils, submissions boundary, actions, validation schemas, config
  types/                 # shared types
public/
  brand/                 # brand-graphic assets
  logos/                 # Platinum logo variants
docs/                    # project documentation + reference mockups
```

## Rendering strategy

- Server Components by default; static generation for all marketing pages.
- `/jobs` reads `searchParams` on the server so search/filters work without JavaScript.
- Client Components only where interactivity requires (nav dropdowns, mobile sheet, forms,
  in-view counters, motion reveals).

## Data flow (forms)

```
Client form (RHF + zod)
  -> Server Action
     -> re-validate with the same zod schema
     -> honeypot spam gate (+ optional Turnstile when env keys are set)
     -> deliver via Resend through src/lib/submissions.ts
Resume file -> uploadResumeAction (Vercel Blob put, private) -> URL passed into submit action
```

`src/lib/submissions.ts` is the single integration boundary. Today it emails via Resend; a
future DB/ATS integration replaces only this module.

## Job data

Typed entries validated by a zod schema in `src/content/jobs`. Each listing can emit
`JobPosting` JSON-LD (only truthful fields). Expired postings are filtered by date.

## Not built (documented boundary, per DECISIONS D2)

Internal admin (add/edit/close jobs, applicant tracking, exports, inquiry status), auth, DB,
CMS, employer/candidate portals. These are future phases; the content model and submissions
boundary are designed to accommodate them.

## Deployment

Target Vercel. Env vars in `.env.example`. `sharp` approved for image optimization. No dark mode.
