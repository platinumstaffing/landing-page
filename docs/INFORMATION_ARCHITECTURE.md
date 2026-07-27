# Information Architecture

Navigation (from the content doc, authoritative):

**Home · About · Employer Solutions · Industries · Job Seekers · Resources · Contact**
Persistent CTAs: primary **Request Talent**, secondary **Find Jobs**.

## Route map

| Route | Purpose | Audience | Primary CTA | Status |
|-------|---------|----------|-------------|--------|
| `/` | Communicate what the firm does, credibility, dual pathways | Both | Request Talent | Built (slice) |
| `/employers` | Employer solutions overview + services + process | Employers | Request Talent | Built (slice) |
| `/industries` | Industries served overview | Employers | Request Talent | Built (slice) |
| `/job-seekers` | Career center hub, application process | Candidates | Search Jobs | Built (slice) |
| `/jobs` | Job search + filters + listings | Candidates | Apply / Submit Resume | Built (slice) |
| `/contact` | Contact pathways + forms + office info | Both | Request Talent | Built (slice) |
| `/employers/[service]` | Temp, Temp-to-Hire, Direct Hire, Seasonal, High-Volume, Workforce Planning | Employers | Request Talent | Deferred |
| `/industries/[industry]` | 6 industry detail pages | Employers | Request Talent | Deferred |
| `/jobs/[slug]` + `/apply` | Job detail + application form | Candidates | Apply | Deferred |
| `/about` (+ Story, Values, Leadership, Why, Careers) | Company narrative | Both | Contact | Deferred |
| `/resources` (+ 5 categories, article template) | Knowledge hub | Both | Subscribe | Deferred |
| `/privacy`, `/terms`, `/accessibility` | Legal | Both | — | Deferred (needs copy) |
| `/type-specimen` | Internal type comparison (temporary) | Internal | — | Temporary |

## Conversion pathways

- **Employers:** Request Talent (primary), Schedule a Consultation, Contact.
- **Candidates:** Search Jobs, Submit Your Résumé, Career Resources.

Each page has exactly one primary objective and CTA, with a clear next step near the end.

## Content relationships

- Home fans out to Employers, Industries, Job Seekers, Jobs, and Resources.
- Employer Solutions and Industries cross-link (each industry references solutions; the employer
  page lists industries served).
- Job Seekers → Jobs (search) and → Submit Résumé.
- Every page terminates in a final CTA band and the global footer conversion paths.
