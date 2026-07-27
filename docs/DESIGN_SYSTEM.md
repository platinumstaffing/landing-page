# Design System

Tokens live in `src/app/globals.css` under `@theme` / `:root`. Components consume semantic
tokens only — no raw hex.

## Color tokens

Brand palette (raw): `--brand-purple #4B2E83`, `--brand-navy #1E2A44`,
`--brand-silver #C7CCD6`, `--brand-white #F8F9FB`, `--brand-charcoal #2C2C2C`,
`--brand-emerald #2E8B57`.

Semantic mapping (shadcn vocabulary → brand):

| Token | Value | Use |
|-------|-------|-----|
| `background` | Soft White | page background |
| `foreground` | Charcoal | body text |
| `card` / `popover` | White | raised surfaces |
| `primary` / `primary-foreground` | Executive Purple / White | CTAs, links, key emphasis |
| `secondary` | tinted light surface | secondary buttons/surfaces |
| `muted` / `muted-foreground` | pale silver tint / mid slate | quiet surfaces + supporting text |
| `accent` (shadcn hover) | pale purple tint | hover backgrounds only |
| `border` / `input` / `ring` | Platinum Silver / silver / Purple | edges, field borders, focus ring |
| `destructive` | red | error states |
| `success` | Emerald | success states |

Brand-named aliases also exposed for direct use: `navy`, `navy-foreground`, `silver`,
`surface`, `surface-muted`. Navy bands use `bg-navy text-navy-foreground`.

## Typography

- `--font-heading`: Manrope. `--font-sans`: Libre Franklin. Loaded via `next/font/google`,
  variables on `<html>`, literal family names inside `@theme inline`.
- Scale (fluid where useful): display 3–3.75rem, h1 2.25–3rem, h2 1.75–2.25rem, h3 1.375rem,
  body 1rem/1.0625rem, small 0.875rem, eyebrow 0.75rem uppercase tracked.
- Body 400/500, headings 600/700. Line-height ~1.6 body, ~1.1 display. `text-balance` on
  headings, `text-pretty` on lede paragraphs.

## Spacing & layout

- Container max-width 1200px (`--container`), gutters 1.25rem mobile → 2rem desktop.
- Section vertical rhythm: `--section-y` clamp(4rem, 8vw, 7rem).
- Radius: `--radius 0.5rem` (8px) baseline; cards `lg`, inputs/buttons `lg`. Never pill.

## Elevation

Hairline-first: 1px `border-border`. Shadow tokens `--shadow-sm/md` reserved for dropdown,
popover, and mobile sheet only.

## Components

- **Button:** variants `default` (solid purple), `outline` (purple border), `subtle`/`ghost`,
  `link`, plus navy inverse usage on dark bands. Sizes tuned for marketing (default ~44px height,
  `lg` for hero); icon sizes retained for dialog/sheet close.
- **Primitives:** Container, Section, Eyebrow, SectionHeading, Prose, StatItem, Card patterns.
- Form field states: default, focus (purple ring), invalid (red border + announced message),
  disabled. Labels always visible; required marked.

## Motion tokens

- `--ease-brand: cubic-bezier(0.22, 1, 0.36, 1)`; durations 200/300/400ms.
- Reveal = 8px rise + fade. Reduced-motion disables transforms globally.

## Responsive

Breakpoints: base (≤640 mobile), `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Test 320→1920.
Grids collapse intentionally (not just stacked); no horizontal overflow.
