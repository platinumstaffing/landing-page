# Brand Direction

Derived from the brand PDF (`Platinum_Staffing_Brand_Identity_Website_Experience_Stylish.pdf`)
and reconciled with the MASTER build instructions. This is the creative point of view the
whole site should express.

## Positioning

Platinum Staffing & Recruitment is a **workforce solutions partner**, not "another staffing
agency." It helps employers build dependable, productive, scalable teams and helps
professionals build meaningful careers. Every page answers one question: *"How does Platinum
Staffing help my business succeed?"* (or, for candidates, *"How does Platinum help my career?"*).

## Brand adjectives

Established, dependable, precise, human, industrial-editorial. Professional without feeling
corporate. Modern without appearing trendy. Confident without being overwhelming.

## Audience impressions

- Employers should feel Platinum understands their workforce challenges and can deliver.
- Job seekers should feel welcomed, respected, and supported — not processed.

## Typography

- **Display / headings: Manrope** (brand-specified). Confident, geometric-humanist.
- **Body: Libre Franklin** (deviation from the brand guide's "Inter" — see DECISIONS). Its
  Franklin Gothic lineage reads American-industrial and editorial, fits the PA / manufacturing
  audience, holds up at small sizes, and avoids the default-Inter "AI SaaS" look MASTER §12 warns about.
- One weight discipline: headings 600/700, body 400/500. Comfortable line length (~65ch),
  generous line-height on body, tight leading on large display.

## Color usage

| Token | Hex | Role |
|-------|-----|------|
| Executive Purple | `#4B2E83` | Signature: primary CTAs, links, key headings, focus ring |
| Deep Navy | `#1E2A44` | Structural anchor bands, footer, corporate messaging |
| Platinum Silver | `#C7CCD6` | Hairlines, dividers, card edges, quiet accents (never body text) |
| Soft White | `#F8F9FB` | Page background |
| Charcoal | `#2C2C2C` | Primary text |
| Emerald | `#2E8B57` | Success states only |

Purple is used deliberately and sparingly so it reads as a signature, not a wash. No gradients
as brand devices; navy is a flat structural color, not a gradient.

## Shape language

Rounded, never pill. Radius baseline 8px. The logo's vertical stem + quarter-circle motif can
inform section rules and image masks — used sparingly.

## Photography / illustration direction

Real workplaces in the industries served — manufacturing, warehousing, distribution, logistics,
administrative, customer service, light industrial — authentic, diverse, safety-aware. AVOID
stock handshakes, staged boardrooms, generic smiling headshots, futuristic/AI imagery, 3D blobs.
No supplied photography yet (see CONTENT_GAPS). Until it arrives, use restrained brand-graphic
compositions derived from the logo geometry, not stock or AI imagery.

## Layout principles

- Editorial hierarchy: eyebrow → heading → lede → content. Avoid centering everything.
- Generous whitespace; hairlines and structural navy bands create rhythm.
- Cards defined by 1px Platinum Silver borders; shadows reserved for truly elevated surfaces
  (dropdowns, mobile sheet).

## Motion character

Confident and restrained. `motion` v12 only. ~200–400ms, one shared easing token. Section
reveals are a small rise + fade; stat counters animate once when in view; buttons show press
feedback; the mobile menu expands from its trigger. Full reduced-motion support.

## Anti-patterns (do not ship)

Icon-in-a-circle on every card, an icon above every heading, purple→blue gradients, neon glow,
glassmorphism everywhere, bento grids without reason, marquees, parallax, cursor effects,
fake logos/stats/testimonials, component-library defaults left unchanged.
