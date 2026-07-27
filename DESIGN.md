---
name: Platinum Staffing & Recruitment
description: Industrial-editorial workforce brand, purple as a rare signature on soft white
colors:
  executive-purple: "#4b2e83"
  deep-navy: "#1e2a44"
  platinum-silver: "#c7ccd6"
  soft-white: "#f8f9fb"
  charcoal: "#2c2c2c"
  emerald: "#2e8b57"
  surface-white: "#ffffff"
  surface-muted: "#f1f2f6"
  muted-foreground: "#55607a"
  secondary-surface: "#ecedf2"
  accent-tint: "#eee9f5"
  border-silver: "#c7ccd6"
  input-stroke: "#8a92a3"
  destructive: "#c0362c"
typography:
  display:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Libre Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "4.8px"
  md: "6.4px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
spacing:
  gutter: "20px"
  section: "clamp(4rem, 8vw, 7rem)"
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.executive-purple}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.executive-purple}"
    textColor: "{colors.surface-white}"
  button-outline:
    backgroundColor: "{colors.soft-white}"
    textColor: "{colors.executive-purple}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  button-navy:
    backgroundColor: "{colors.deep-navy}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.lg}"
    padding: "0 12px"
    height: "44px"
---

# Design System: Platinum Staffing & Recruitment

## 1. Overview

**Creative North Star: "The Considered Foreman"**

This is the visual language of a workforce solutions partner that has been placing people
on real plant and warehouse floors since 2019, not a venture-backed hiring app. It reads
industrial-editorial: the structural confidence of Franklin Gothic signage and the calm
whitespace of a well-set annual report. Soft White carries almost every surface. Deep Navy
appears as flat structural bands that anchor the page like steel. Executive Purple is the
signature, spent deliberately and rarely so it always means "act here." The system is
established, dependable, precise, and human. Professional without feeling corporate; modern
without appearing trendy; confident without being overwhelming.

It explicitly rejects the generic "AI SaaS" look: default Inter body type, purple-to-blue
gradients, neon glow, glassmorphism, and 3D blobs are all forbidden. It rejects decoration
that pretends to be structure, an icon above every heading, an icon-in-a-circle on every
card, marquees, parallax, and cursor effects. Trust is earned through restraint and real
content, never through fabricated logos, stats, or testimonials.

**Key Characteristics:**
- Soft White canvas, Charcoal text, Platinum Silver hairlines: quiet by default.
- Deep Navy as a flat structural anchor, never a gradient.
- Executive Purple as a rare signature (CTAs, links, focus), never a wash.
- Editorial hierarchy: eyebrow, heading, lede, content. Nothing centered by reflex.
- Hairline-first elevation; shadows reserved for genuinely floating surfaces.

## 2. Colors

A restrained palette: near-monochrome neutrals on Soft White, with a single saturated
purple signature and a navy structural anchor.

### Primary
- **Executive Purple** (#4b2e83): The signature. Primary CTAs, links, key emphasis, and the
  focus ring. Used deliberately and sparingly so it reads as a mark of intent, never
  ambient color.

### Secondary
- **Deep Navy** (#1e2a44): Structural anchor bands, the footer, and corporate messaging
  blocks. A flat field of steel, never a gradient. Pairs with Soft White text on dark bands.

### Tertiary
- **Emerald** (#2e8b57): Success states only. Never decorative, never a second brand accent.

### Neutral
- **Soft White** (#f8f9fb): The page background; the canvas nearly everything sits on.
- **Charcoal** (#2c2c2c): Primary body and heading text.
- **Surface White** (#ffffff): Raised surfaces, cards, popovers, input fields.
- **Surface Muted** (#f1f2f6): Quiet alternating sections and subdued fills.
- **Muted Foreground** (#55607a): Supporting and secondary text (slate, still AA on white).
- **Platinum Silver** (#c7ccd6): Hairlines, dividers, card edges, quiet accents. Never used
  for body text.
- **Input Stroke** (#8a92a3): Field borders, where a hairline needs more presence than a
  divider.
- **Accent Tint** (#eee9f5): Pale purple hover background only. Not a fill color for content.
- **Destructive** (#c0362c): Error states and destructive actions.

### Named Rules
**The Rare Signature Rule.** Executive Purple appears on roughly 10% of any given screen, and
only where it means "act": CTAs, links, focus rings, a single key heading. If purple is
carrying a whole section, it has become a wash and must be pulled back to navy or silver.

**The Flat Navy Rule.** Navy is a structural color, not an effect. Never gradient it, never
glow it, never fade it into purple.

## 3. Typography

**Display Font:** Manrope (with ui-sans-serif, system-ui fallback)
**Body Font:** Libre Franklin (with ui-sans-serif, system-ui fallback)

**Character:** Manrope is a confident geometric-humanist for headings; Libre Franklin's
Franklin Gothic lineage reads American-industrial and editorial, holds up at small sizes,
and deliberately avoids the default-Inter "AI SaaS" look. Together they feel like considered
signage over a clean editorial body.

### Hierarchy
- **Display** (Manrope 700, clamp 3–3.75rem, line-height 1.05): Hero statements only; tight
  leading, slight negative tracking.
- **Headline** (Manrope 700, clamp 2.25–3rem, line-height 1.1): Section openers (h1/h2).
- **Title** (Manrope 600, 1.375rem, line-height 1.25): Card and subsection headings (h3).
- **Body** (Libre Franklin 400, 1–1.0625rem, line-height 1.6): Running text. Cap measure at
  ~65ch; lede paragraphs use `text-pretty`.
- **Label** (Libre Franklin 600, 0.75rem, letter-spacing 0.08em, UPPERCASE): Eyebrows and
  small structural labels above headings.

### Named Rules
**The Two-Weight Rule.** Headings live at 600 or 700, body at 400 or 500. No thin display
weights, no black weights, no in-between improvisation.

## 4. Elevation

Hairline-first. Depth is conveyed by 1px Platinum Silver borders and tonal shifts between
Soft White and Surface Muted, not by drop shadows. Cards sit flat on the page, defined by
their edges. Shadows are reserved for surfaces that genuinely float above the page: dropdown
menus, popovers, and the mobile navigation sheet.

### Named Rules
**The Hairline-First Rule.** If a surface is not literally floating over the page, it gets a
1px `border-silver` (#c7ccd6) and no shadow. Shadows are a response to elevation state, not a
default decoration.

## 5. Components

### Buttons
- **Shape:** Rounded, never pill (8px radius, `rounded.lg`). Default height 44px (`h-11`), `lg`
  height 48px for hero CTAs, `sm` height 36px.
- **Primary:** Solid Executive Purple (#4b2e83) with white text; hover darkens to `primary/90`.
  Used for the page's main action (Request Talent, Schedule a Consultation, Search Jobs).
- **Outline:** Purple border and text on transparent; on hover fills to solid purple with
  white text.
- **Navy:** Deep Navy fill with Soft White text, for actions living inside navy bands.
- **Quiet / Ghost / Secondary:** Silver-bordered or muted-fill low-emphasis actions; ghost
  uses a muted hover background.
- **Link:** Purple text, underline on hover, no chrome.
- **Hover / Focus:** 200ms transitions on the `--ease-brand` curve; press feedback is a 1px
  downward nudge (`active:translate-y-px`); focus-visible shows a 3px purple ring at 40% plus
  a solid ring border.

### Cards / Containers
- **Corner Style:** 8px radius (`rounded.lg`).
- **Background:** Surface White (#ffffff) on the Soft White page, or Surface Muted for quiet
  alternating bands.
- **Shadow Strategy:** None at rest. See Elevation, the Hairline-First Rule.
- **Border:** 1px Platinum Silver (#c7ccd6).
- **Internal Padding:** 24px (`lg`). Never nest a card inside a card.

### Inputs / Fields
- **Style:** Surface White fill, 1px input stroke (#8a92a3), 8px radius, 44px height.
- **Focus:** Purple ring (`--ring` #4b2e83) plus border shift; the ring is the same purple as
  the primary signature.
- **Error / Disabled:** Invalid shows a Destructive (#c0362c) border with an announced
  message; labels are always visible and required fields are marked.

### Navigation
- **Style:** Site header with Manrope wordmark and Libre Franklin nav links; Charcoal at rest,
  Executive Purple on hover/active. Structural hairline under the header.
- **Mobile:** A sheet that expands from its trigger (Motion v12), respecting reduced-motion.

## 6. Do's and Don'ts

### Do:
- **Do** spend Executive Purple (#4b2e83) sparingly, on ≤10% of a screen and only where it
  means "act" (CTAs, links, focus).
- **Do** use Deep Navy (#1e2a44) as flat structural bands to create page rhythm.
- **Do** define cards and quiet surfaces with 1px Platinum Silver (#c7ccd6) hairlines, not
  shadows.
- **Do** lead sections with the editorial pattern: eyebrow label, heading, lede, then content.
- **Do** cap body measure near 65ch and keep the two-weight type discipline (headings 600/700,
  body 400/500).
- **Do** respect `prefers-reduced-motion`; keep motion 200–400ms on the `--ease-brand` curve.

### Don't:
- **Don't** use default Inter as the body font, purple-to-blue gradients, neon glow, or
  glassmorphism anywhere.
- **Don't** gradient, glow, or fade Deep Navy; it is a flat structural color.
- **Don't** put an icon above every heading or an icon-in-a-circle on every card.
- **Don't** ship marquees, parallax, cursor effects, or bento grids without a reason.
- **Don't** nest a card inside a card, or reach for a shadow on a surface that isn't floating.
- **Don't** fabricate logos, stats, or testimonials; unknown data goes to CONTENT_GAPS.
- **Don't** make buttons pill-shaped; radius stays at 8px.
