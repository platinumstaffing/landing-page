# QA Checklist

Reusable checks before declaring a page or the project done (MASTER §25).

## Engineering

- [ ] `pnpm install --frozen-lockfile` is clean
- [ ] `pnpm format:check` passes
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm test:unit` passes with coverage thresholds
- [ ] `pnpm deps:check` reports no unexplained dead files or dependencies
- [ ] `pnpm build` passes
- [ ] No unexplained console warnings
- [ ] Env vars documented in `.env.example`

## Security and delivery

- [ ] `pnpm security:secrets` passes
- [ ] `pnpm security:audit` has no high/critical production advisory
- [ ] actionlint and zizmor pass for every workflow
- [ ] CodeQL and Dependency Review pass
- [ ] CycloneDX SBOM is retained for the protected-branch build
- [ ] Pull request author/source policy passes before code execution
- [ ] Required GitHub rulesets are active with no bypass actors
- [ ] Immutable Vercel deployment project, branch, environment, and SHA are verified
- [ ] Runtime security headers and the tuned ZAP baseline pass
- [ ] A failed deployment check leaves the prior domain alias active

## Visual

- [ ] Intentional layout at mobile (320) and desktop (1920)
- [ ] Consistent typography + spacing
- [ ] Images correctly cropped; correct aspect ratios
- [ ] No text overlap, no horizontal overflow
- [ ] Complete interactive states (hover/focus/active/disabled)
- [ ] Matches the design system; not a generic template

## Accessibility (WCAG 2.2 AA)

- [ ] Playwright axe suite passes on representative routes
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

- [ ] Lighthouse performance ≥ 0.85 and best practices ≥ 0.95
- [ ] Script transfer ≤ 400 KB and image transfer ≤ 1.8 MB per audited route
- [ ] Images optimized; dimensions set (no CLS)
- [ ] Client components justified
- [ ] Motion does not block interaction
- [ ] Mobile performance considered

## SEO

- [ ] Lighthouse accessibility and SEO scores are both 1.00
- [ ] Unique title + meta description per page
- [ ] Open Graph + social image
- [ ] Canonical, sitemap, robots
- [ ] Organization JSON-LD (only when data is truthful)
- [ ] JobPosting JSON-LD for real listings only
