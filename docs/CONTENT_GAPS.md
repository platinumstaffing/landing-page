# Content Gaps

Items required from the client. None block the current build; the site degrades honestly
(sections self-hide or use marked placeholders) until they arrive.

## Missing company information

- [ ] Office address (mockups' TN address is placeholder; firm is PA-based)
- [ ] Phone number (mockup `(615) 555-0198` is placeholder)
- [ ] Contact email(s), including employment-verification address
- [ ] Business hours
- [ ] Social media URLs (LinkedIn, Facebook, Instagram, X)
- [ ] Google Maps embed location / directions

## Missing assets

- [ ] Photography for hero and industry sections (real workplaces; see BRAND_DIRECTION).
      Interim: brand-graphic compositions from the logo geometry — NOT stock/AI imagery.
- [ ] **Replace `public/brand/hero.jpg` before launch.** The current file is a generic stock
      shot (a laptop showing an unrelated SaaS landing page + coffee cup) — off-brand and a
      direct anti-reference. It is used as a temporary stand-in only because the homepage hero
      runs it through a navy duotone + grain WebGL shader (DECISIONS D10), which disguises it.
      Swap in a real PA manufacturing / warehouse / logistics workplace photo (landscape,
      ~2400px+ wide); the shader will brand it automatically. No other code change needed.
- [ ] Logo variants: only a horizontal lockup on white (`logo.png`) was supplied. The brand
      guide itself calls for stacked, light/dark, and favicon variants. Interim assets are
      derived from the supplied lockup + mark; confirm or replace with official files.
- [ ] Employer partner logos for the "Trusted by Employers" band — must be real and permissioned.
      Band self-hides while `src/content/employers.ts` is empty (DECISIONS D4).

## Unverified / withheld claims

- Leadership names, bios, headshots (content doc marks these "as they become available").
  The `/about` Leadership section is live with the approved intro copy and an honest
  "added as they become available" note; drop real people in when supplied.
- Any specific client names, awards, certifications — not to be invented.

## Missing copy

- [x] Accessibility Statement — published (`/accessibility`); truthful description of the
      site's accessibility posture. Review wording, then it can stay indexed.
- [ ] Privacy Policy + Terms & Conditions — live as **grounded drafts** (`/privacy`, `/terms`),
      `noindex`, with a "pending legal review, not in effect" banner. Privacy reflects the
      code's actual data flows (forms → email delivery; résumés → private Blob storage; no
      third-party analytics/ad cookies). Counsel must review and confirm the `[bracketed]`
      items (legal entity, retention periods, applicable privacy laws/rights, governing law,
      liability, minimum age, privacy/legal contact) before removing `noindex`.
- [ ] Real job postings (current `/jobs` uses clearly-marked sample listings derived from the
      content doc's example roles; replace with real openings).
- [ ] Resource Center articles. The `/resources` category directory (Workforce Insights,
      Industry Reports, Employer Resources, Career Advice, Company News) is live with approved
      category descriptions and honest "articles in progress" states. Supply real articles +
      an article template to populate each category (see `src/content/resources.ts`).

## Decisions needing sign-off

- Body typeface (Libre Franklin vs Inter) — see DECISIONS D1 and `/type-specimen`.
- Derived logo assets in `public/logos/` (transparent lockup + mark) — confirm or replace with
  official light/dark/stacked variants from the brand guide.
- Sample job listings in `src/content/jobs/` — illustrative PA roles for the search UI; replace
  with real openings before launch.
