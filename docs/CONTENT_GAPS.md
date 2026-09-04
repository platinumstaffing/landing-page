# Content Gaps

Items required from the client. None block the current build; the site degrades honestly
(sections self-hide or use marked placeholders) until they arrive.

## Missing company information

- [ ] Office address (mockups' TN address is placeholder; service area is the tri-state region)
- [ ] Phone number (mockup `(615) 555-0198` is placeholder)
- [ ] Contact email(s), including employment-verification address
- [ ] Business hours
- [ ] Social media URLs (LinkedIn, Facebook, Instagram, X)
- [ ] Google Maps embed location / directions

## Missing assets

- [x] Twelve homepage workplace images supplied, resized into their intended art-directed formats,
      and connected through the typed image manifest: 16:10 hero, 4:5 employer partnership, 4:3
      industry/staffing imagery, and 3:2 candidate/resource imagery.
- [x] Five coordinated Partnership Journey illustrations supplied and implemented. The responsive
      code-rendered connector now continues through the complete card sequence.
- [x] Thirty-three of forty sitewide photographs from `docs/SITEWIDE_IMAGE_PROMPTS.md`
      generated as JPEGs, converted to spec WebP, and connected through `src/content/page-images.ts`.
      Seven slots reuse existing photographs until dedicated files arrive
      (`src/content/page-images.ts` `reusedPageImages`): candidate conversation, service-area
      operations, workforce insights, industry reports, employer guides, career advice, and
      the resource desk. JPEG originals are gitignored.
- [ ] Real leadership headshots. Do not generate or fabricate named executives; commissioned
      photography is required when leadership identities and biographies are supplied.
- [ ] The unused `public/brand/hero.jpg` remains an off-brand generic SaaS stock image and should
      be removed from the asset library after confirming no external workflow references it. It is
      no longer rendered anywhere on the site.
- [ ] Logo variants: only a horizontal lockup on white (`logo.png`) was supplied. The brand
      guide itself calls for stacked, light/dark, and favicon variants. Interim assets are
      derived from the supplied lockup + mark; confirm or replace with official files.
- [ ] Employer partner logos for the "Trusted by Employers" band — must be real and permissioned.
      Band self-hides while `src/content/employers.ts` is empty (DECISIONS D4).

## Unverified / withheld claims

- Leadership names, bios, headshots (content doc marks these "as they become available").
  The `/about/leadership` page is live with the approved intro copy and an honest
  "added as they become available" note; drop real people in when supplied.
- Any specific client names, awards, certifications — not to be invented.

## Missing copy

- [x] Accessibility Statement — published (`/accessibility`); truthful description of the
      site's accessibility posture. Review wording, then it can stay indexed.
- [ ] Privacy Policy + Terms & Conditions — live as **grounded drafts** (`/privacy`, `/terms`),
      `noindex`, with a "pending legal review, not in effect" banner. Privacy reflects the
      code's actual data flows (forms → email delivery; résumés → private Blob storage; no
      third-party analytics/ad cookies). Counsel must review and confirm the `[bracketed]`
      items (legal entity, retention periods, applicable privacy laws/rights including PA/NJ/NY,
      governing law for multi-state operations, liability, minimum age, privacy/legal contact)
      before removing `noindex`.
- [ ] Real job postings (current `/jobs` uses clearly-marked sample listings derived from the
      content doc's example roles; replace with real openings).
- [ ] Resource Center articles. Category pages now exist for Workforce Insights, Industry
      Reports, Employer Resources, Career Advice, and Company News (`/resources/[slug]`), each
      with approved framing, topic scope, and an honest "articles in progress" state. Supply
      real articles + an article template to populate each category (see `src/content/resources.ts`).
- [ ] Optional richer industry-page enrichment. Dedicated industry landings now ship from the
      copy deck (Manufacturing is fullest; the other five use honest non-invented supporting
      challenges/FAQs). Client may still supply deeper industry-specific narratives.

## Decisions needing sign-off

- [x] Libre Franklin retained for body copy and self-hosted with Manrope as licensed, subsetted
      WOFF2 assets. The internal `/type-specimen` route and network font dependency were removed.
- Derived logo assets in `public/logos/` (transparent lockup + mark) — confirm or replace with
  official light/dark/stacked variants from the brand guide.
- Sample job listings in `src/content/jobs/` — illustrative tri-state roles for the search UI;
  replace with real openings before launch.

## Delivery ownership

- [ ] A repository owner must apply and verify `.github/rulesets/release-dev.json` and
      `.github/rulesets/main.json`; the implementation identity does not have repository-admin
      authority.
- [ ] A Vercel administrator must create the isolated staging and production projects, supply
      their project IDs/domains, configure branch filters and Deployment Checks, and populate
      environment-specific values without copying production secrets into staging or preview.
- [ ] Confirm every production subdomain is permanently HTTPS before considering HSTS with
      `includeSubDomains`. HSTS is intentionally not enabled today.
