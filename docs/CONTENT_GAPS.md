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
- [ ] Logo variants: only a horizontal lockup on white (`logo.png`) was supplied. The brand
      guide itself calls for stacked, light/dark, and favicon variants. Interim assets are
      derived from the supplied lockup + mark; confirm or replace with official files.
- [ ] Employer partner logos for the "Trusted by Employers" band — must be real and permissioned.
      Band self-hides while `src/content/employers.ts` is empty (DECISIONS D4).

## Unverified / withheld claims

- Leadership names, bios, headshots (content doc marks these "as they become available").
- Any specific client names, awards, certifications — not to be invented.

## Missing copy

- [ ] Privacy Policy, Terms & Conditions, Accessibility Statement (legal pages deferred until
      client provides copy).
- [ ] Real job postings (current `/jobs` uses clearly-marked sample listings derived from the
      content doc's example roles; replace with real openings).

## Decisions needing sign-off

- Body typeface (Libre Franklin vs Inter) — see DECISIONS D1 and `/type-specimen`.
- Derived logo assets in `public/logos/` (transparent lockup + mark) — confirm or replace with
  official light/dark/stacked variants from the brand guide.
- Sample job listings in `src/content/jobs/` — illustrative PA roles for the search UI; replace
  with real openings before launch.
