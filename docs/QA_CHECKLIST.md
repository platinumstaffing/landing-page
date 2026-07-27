# QA Checklist

Reusable checks before declaring a page or the project done (MASTER §25).

## Engineering

- [ ] `pnpm install` clean
- [ ] `pnpm build` passes
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] No unexplained console warnings
- [ ] No dead imports / unused packages
- [ ] Env vars documented in `.env.example`

## Visual

- [ ] Intentional layout at mobile (320) and desktop (1920)
- [ ] Consistent typography + spacing
- [ ] Images correctly cropped; correct aspect ratios
- [ ] No text overlap, no horizontal overflow
- [ ] Complete interactive states (hover/focus/active/disabled)
- [ ] Matches the design system; not a generic template

## Accessibility (WCAG 2.2 AA)

- [ ] Keyboard navigation works end-to-end
- [ ] Visible focus on all interactive elements
- [ ] Skip link present and functional
- [ ] Logical heading order (one h1 per page)
- [ ] Form controls labeled; errors associated + announced
- [ ] Contrast sufficient (purple-on-white text ≈ 10.6:1; silver is borders only)
- [ ] `prefers-reduced-motion` respected
- [ ] Touch targets ≥ 44px; no hover-only interactions

## Content

- [ ] No lorem ipsum
- [ ] No fabricated claims (stats/testimonials/logos/locations)
- [ ] CTAs specific (not "Get Started" everywhere)
- [ ] Employer + candidate pathways clear
- [ ] Placeholders explicitly marked (see CONTENT_GAPS)

## Performance

- [ ] Images optimized; dimensions set (no CLS)
- [ ] Client components justified
- [ ] Motion does not block interaction
- [ ] Mobile performance considered

## SEO

- [ ] Unique title + meta description per page
- [ ] Open Graph + social image
- [ ] Canonical, sitemap, robots
- [ ] Organization JSON-LD (only when data is truthful)
- [ ] JobPosting JSON-LD for real listings only
