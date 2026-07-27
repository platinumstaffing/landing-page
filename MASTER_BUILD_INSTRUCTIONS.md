# Recruiting Firm Website: Master Agent Build Instructions

## 1. Purpose of This Document

This document is the primary operating guide for every AI agent working on this website.

The repository currently contains little or no application code. It may contain only the following:

- Brand assets
- Logo files
- Brand guidelines
- Website copy
- Images or photography
- Business information
- Positioning documents
- Reference websites
- Other supporting material

The agents are responsible for transforming these materials into a complete, production-ready recruiting firm website using Next.js, TypeScript, Tailwind CSS, carefully selected UI libraries, and high-quality motion.

The website must feel credible, refined, human, and distinctive. It must not resemble a generic AI-generated SaaS landing page.

Every agent must read this document before making changes.

---

# 2. Project Objective

Design and build a premium recruiting firm website that:

- Clearly communicates the firm’s positioning and expertise
- Builds trust with both employers and candidates
- Makes it easy for employers to discuss hiring needs
- Makes it easy for candidates to explore opportunities or submit their information
- Presents the company as knowledgeable, established, responsive, and selective
- Reflects the supplied brand identity instead of forcing the brand into a generic template
- Performs well across desktop, tablet, and mobile devices
- Meets modern accessibility, performance, SEO, and engineering standards
- Uses thoughtful animation and interaction without becoming distracting
- Feels intentionally designed rather than assembled from fashionable components

The experience should position the recruiting firm as a trusted partner, not merely a job board.

---

# 3. Core User Groups

The website must account for at least two primary audiences.

## 3.1 Employers

Employers may visit the site to:

- Understand the recruiting firm’s specialties
- Determine whether the firm understands their industry
- Learn about the recruiting process
- Review services or engagement models
- Evaluate credibility, expertise, and prior results
- Submit a hiring request
- Schedule an introductory conversation
- Contact the firm directly

## 3.2 Candidates

Candidates may visit the site to:

- Understand the industries and roles the firm recruits for
- Browse available opportunities
- Submit a résumé
- Join the talent network
- Learn what to expect from the recruiting process
- Read career insights
- Contact a recruiter

The website must make the distinction between employer and candidate journeys clear without making the overall experience feel divided or fragmented.

---

# 4. Required Technology

Use the following foundation unless the repository explicitly specifies otherwise:

- Next.js using the App Router
- TypeScript with strict mode enabled
- Tailwind CSS
- React Server Components by default
- Client Components only where interactivity requires them
- ESLint
- Prettier or the repository’s selected formatter
- Modern image optimization through Next.js
- Local or properly optimized web fonts
- Metadata API for SEO
- Accessible semantic HTML
- A production-ready deployment configuration

Use the package manager already specified by the repository. If no package manager is specified, prefer `pnpm`.

Do not introduce a backend, database, CMS, or authentication system unless the requirements call for one.

Do not install large libraries for functionality that can be implemented cleanly with the existing stack.

---

# 5. UI, Component, and Motion Libraries

Libraries may be used when they provide genuine value. They must not determine the website’s visual identity.

Potential sources include:

- Tailwind CSS
- Radix UI primitives
- shadcn/ui primitives, selectively
- Motion
- GSAP, only where its additional capabilities are justified
- React Bits
- Aceternity UI
- Magic UI
- 21st.dev components
- Other accessible, well-maintained component libraries

Every imported component must be modified to match the project’s brand, content, spacing, typography, and interaction language.

Never copy a component into the site without adapting it.

Avoid excessive dependency accumulation. A recruiting website should not require five animation libraries and four component systems.

Select one primary motion solution wherever possible.

---

# 6. Icon Policy

Do not use Lucide React.

Lucide icons are prohibited for this project because their overuse can make interfaces feel generic and automatically generated.

Preferred alternatives include:

- Phosphor Icons
- Remix Icon
- Iconoir
- Radix Icons for small interface controls
- Simple custom SVG icons
- Brand-specific illustrations
- Typographic symbols where appropriate
- CSS-drawn decorative elements
- Carefully designed text links without icons

Do not replace Lucide with another icon library and then place icons in every card.

Icons should clarify meaning, not decorate every heading.

Avoid the following patterns:

- An icon above every feature title
- Identical outlined icons inside colored circles
- Arbitrary arrows in every button
- Sparkle icons used to imply innovation
- Decorative checkmarks repeated across the entire site
- Abstract “AI” symbols that have no relationship to recruiting

---

# 7. Mandatory Skill Sequence

The skills must be used in the following order.

## Phase A: Repository and Brand Discovery

Do not begin implementation immediately.

First:

1. Inspect the entire repository.
2. Identify all supplied logos, images, fonts, copy, documents, and brand references.
3. Read any existing instructions, README files, and content documents.
4. Determine what is authoritative and what is placeholder content.
5. Identify missing information without blocking reasonable implementation.
6. Create an initial content and page inventory.
7. Document assumptions before proceeding.

No visual skill should be used until the available project context has been inspected.

## Phase B: Taste Skill for Creative Direction

Use the Taste skill before committing to the visual system or page layouts.

The Taste skill should help determine:

- The most appropriate visual direction for the brand
- What makes the brand distinctive
- How the site should feel emotionally
- Suitable typography
- Suitable layout density
- Appropriate use of whitespace
- Image direction
- Composition and hierarchy
- Which conventions should be followed
- Which conventions can be broken intentionally
- What should be avoided because it feels generic, fashionable, or disconnected from the brand

The Taste pass must result in a concise creative direction before full implementation.

Document:

- Brand adjectives
- Audience impressions
- Typography direction
- Color usage
- Shape language
- Photography or illustration direction
- Layout principles
- Motion character
- Visual anti-patterns

Taste is responsible for the initial design point of view.

It must not merely suggest fashionable UI effects.

## Phase C: Technical Scaffolding

After establishing the creative direction, scaffold the project.

Set up:

- Next.js
- TypeScript
- Tailwind CSS
- Linting
- Formatting
- Folder structure
- Global styles
- Font loading
- Metadata
- Environment variable documentation
- Reusable layout primitives
- Basic design tokens
- Responsive container behavior
- Initial page routes
- Error and not-found experiences
- Testing infrastructure when required

The scaffold should be minimal, clean, and extensible.

Do not build the homepage as one massive component.

## Phase D: Core Design System

Create the foundational system before constructing all pages.

Define:

- Color tokens
- Text colors
- Surface colors
- Border colors
- Focus colors
- Typography scale
- Heading hierarchy
- Body text styles
- Link styles
- Spacing scale
- Container widths
- Corner radius strategy
- Shadow strategy
- Button hierarchy
- Form styles
- Section spacing
- Grid behavior
- Motion tokens
- Breakpoints
- Image treatments

Use semantic tokens such as:

- `background`
- `foreground`
- `surface`
- `surface-muted`
- `border`
- `accent`
- `accent-foreground`
- `success`
- `error`

Avoid scattering arbitrary color values throughout components.

The design system should reflect the supplied branding. It must not overwrite the brand with the default appearance of a component library.

## Phase E: Core Page Implementation

Build the primary user journeys before decorative enhancements.

Recommended page priority:

1. Global header and navigation
2. Homepage
3. Employer or hiring services page
4. Candidate or job seeker page
5. Industry or specialty pages
6. About page
7. Jobs or opportunities page
8. Contact or consultation page
9. Résumé or talent network submission flow
10. Insights or resources pages
11. Privacy, terms, and accessibility pages where required
12. Footer and global conversion paths

The actual routes should follow the supplied content and business requirements.

Build pages in complete vertical slices. A vertical slice includes:

- Structure
- Responsive behavior
- Styling
- Content
- Basic accessibility
- Relevant interactions
- Validation
- Loading and error states where applicable

Do not leave critical responsive work until the end.

## Phase F: Impeccable Skill for Interface Refinement

Use the Impeccable skill after the main layouts and design system exist.

The Impeccable pass should inspect and improve:

- Visual hierarchy
- Composition
- Alignment
- Typography
- Contrast
- Density
- Section pacing
- Whitespace
- Component consistency
- Button prominence
- Form usability
- Responsive behavior
- Content readability
- Accessibility
- Perceived quality
- Interaction clarity
- Empty states
- Error states
- Loading states
- Conversion paths

Impeccable should refine the implemented interface, not replace the brand direction with a new style.

The agent must act on the findings instead of only producing a critique.

For every relevant page:

1. Inspect the existing implementation.
2. Identify visual and usability weaknesses.
3. Rank improvements by impact.
4. Implement the improvements.
5. Reinspect the result.
6. Record meaningful decisions.

Impeccable is responsible for polish, coherence, and execution quality.

## Phase G: Emil Kowalski Motion and Interaction Pass

Use the Emil Kowalski skill or its interaction-design principles only after the layout, typography, and hierarchy are stable.

Motion must support comprehension.

The motion pass should focus on:

- Clear cause and effect
- Appropriate easing
- Natural durations
- Spatial continuity
- Enter and exit transitions
- Hover and pressed states
- Navigation feedback
- Menu behavior
- Form feedback
- Scroll-triggered reveals
- Content transitions
- Reduced-motion support
- Responsive interaction behavior

Prioritize interaction quality over animation quantity.

Good motion may include:

- Navigation elements that appear and disappear naturally
- Buttons that communicate press and release
- Menus that expand from a logical origin
- Cards with restrained hover feedback
- Form fields with clear success and error transitions
- Section reveals that preserve reading flow
- Counters that animate only when meaningful
- Job filters with clear state transitions
- Accordions with smooth height and opacity changes
- Subtle page transitions when they do not interfere with navigation

Avoid:

- Animating every element on page load
- Large staggered reveals that delay access to content
- Excessive parallax
- Constant floating elements
- Cursor-following effects
- Marquees used only because they are fashionable
- Scroll hijacking
- Long cinematic intros
- Excessive spring animations
- Animations that cause layout shifts
- Motion that makes the business appear less serious
- Effects that obscure focus indicators
- Interactions that fail on touch devices

Motion should feel confident, restrained, and responsive.

## Phase H: Combined Final Review

After the motion pass, perform a final review using the principles of all three skills.

Ask:

### Taste

- Does the website have a clear point of view?
- Does it genuinely reflect the brand?
- Does it feel like a recruiting firm rather than a generic startup?
- Are there memorable but appropriate design decisions?
- Is anything included merely because it is fashionable?

### Impeccable

- Is the hierarchy clear?
- Are pages easy to scan?
- Are calls to action obvious?
- Is typography consistent?
- Are spacing and alignment deliberate?
- Do forms and states feel complete?
- Does every page work properly at multiple screen sizes?

### Emil Kowalski

- Does motion explain relationships and changes?
- Does interaction feedback feel immediate?
- Are animations appropriately timed?
- Does the interface remain usable with reduced motion?
- Has unnecessary animation been removed?

The final review must include implementation changes, not just observations.

---

# 8. Required Planning Before Implementation

Before editing application code, create or update a project plan containing:

- Repository assessment
- Available assets
- Available copy
- Missing content
- Assumptions
- Proposed routes
- Proposed component architecture
- Design direction
- Technical architecture
- Dependency choices
- Implementation phases
- Risks
- Validation strategy

Do not build a page based only on its name.

Understand:

- Its audience
- Its primary objective
- Its primary call to action
- Its supporting content
- Its relationship to the broader conversion journey

---

# 9. Recommended Information Architecture

Adapt this structure to the supplied content instead of forcing it into the project.

A recruiting firm site may contain:

- Home
- Employers
  - Hiring Services
  - Executive Search
  - Contract Staffing
  - Permanent Placement
  - Recruitment Process
  - Request Talent
- Candidates
  - Search Jobs
  - Join the Talent Network
  - Submit Résumé
  - Candidate Process
  - Career Resources
- Industries or Specialties
- About
  - Company
  - Leadership
  - Values
  - Approach
- Insights
- Contact
- Privacy Policy
- Terms
- Accessibility Statement

Do not create empty pages solely to make the navigation appear larger.

---

# 10. Homepage Requirements

The homepage should communicate the following within the first few sections:

- What the recruiting firm does
- Who it serves
- What differentiates it
- Which industries or roles it specializes in
- Why employers and candidates should trust it
- What action each audience should take next

A suitable homepage sequence may include:

1. Hero
2. Credibility or trust indicators
3. Audience pathway for employers and candidates
4. Specialties or industries
5. Firm differentiation
6. Recruiting process
7. Results or outcomes
8. Featured roles or opportunities
9. Testimonials or case studies
10. Insights
11. Final call to action

This is a starting framework, not a mandatory template.

The homepage should not begin with vague statements such as:

- “Connecting talent with opportunity”
- “Where people and possibilities meet”
- “Empowering the future of work”
- “Unlocking human potential”
- “Your partner in success”

Use specific, defensible positioning based on the supplied brand content.

---

# 11. Visual Direction

The design should feel:

- Established
- Intelligent
- Editorial
- Human
- Trustworthy
- Selective
- Modern without being trendy
- Professional without being sterile

The visual language may draw from:

- Executive search firms
- Editorial publications
- High-quality professional service firms
- Architecture studios
- Boutique consultancies
- Premium talent organizations

Avoid making the website resemble:

- A generic AI startup
- A cryptocurrency platform
- A developer tool
- A neon technology landing page
- A copied shadcn template
- A job board with no brand personality
- A collection of unrelated component demos

---

# 12. Typography Requirements

Typography must contribute materially to the brand.

Do not automatically use Inter.

Choose typefaces based on the supplied identity and desired positioning.

Potential directions include:

- A refined serif paired with a neutral sans serif
- A distinctive grotesk paired with an editorial serif
- A humanist sans serif system
- A confident display face with restrained body typography

Use no more type families than necessary.

Ensure:

- Comfortable body line lengths
- Clear heading hierarchy
- Responsive font sizing
- Consistent line height
- Strong contrast
- Proper text wrapping
- No isolated single-word lines in major headings where reasonably preventable
- No microscopic uppercase labels
- No excessively large hero text that overwhelms the viewport

Avoid typewriter or monospace fonts unless the brand has a meaningful reason to use them.

---

# 13. Image and Media Direction

Use provided brand photography first.

If additional imagery is needed, establish a consistent direction before selecting images.

Potential recruiting imagery may focus on:

- Real workplaces
- Human conversation
- Leadership
- Collaboration
- Skilled professionals
- Industry-specific environments
- Architectural or geographic details connected to the brand
- Abstract editorial compositions that support the positioning

Avoid:

- Obvious stock handshakes
- People pointing at transparent screens
- Fake office celebrations
- Overly staged team meetings
- Generic smiling headshots
- Futuristic AI imagery
- Random 3D blobs
- Images that have no connection to the firm’s specialties

Every image must have an intentional crop, aspect ratio, and responsive treatment.

Provide useful alternative text. Decorative images should use empty alt text.

---

# 14. Component Architecture

Prefer small, composable primitives and clear page-level sections.

Possible structure:

```text
src/
  app/
    (marketing)/
    api/
    layout.tsx
    not-found.tsx
    error.tsx
  components/
    layout/
    navigation/
    sections/
    forms/
    jobs/
    ui/
  content/
  data/
  lib/
  hooks/
  styles/
  types/
  public/
```

Adjust this structure based on the actual project.

Separate:

- Reusable UI primitives
- Business-specific components
- Page sections
- Content and data
- Interactive client behavior
- Utility functions

Do not turn every element into a reusable component.

Do not place all business content inside JSX when it can be maintained more cleanly through structured data or content files.

Avoid premature abstraction. Extract a component when it improves clarity, consistency, or maintainability.

---

# 15. Content Integrity

Use the supplied website content as the source of truth.

Agents may improve:

- Grammar
- Readability
- Scannability
- Heading structure
- Button labels
- Repetition
- Information hierarchy

Agents must not invent:

- Client names
- Placement counts
- Revenue
- Years of experience
- Retention statistics
- Testimonials
- Awards
- Industry certifications
- Office locations
- Partnerships
- Job openings
- Regulatory claims
- Diversity claims
- Guarantees

Use clearly marked placeholders only when implementation requires missing information.

Do not publish lorem ipsum.

Any proposed copy change that materially alters the company’s positioning should be documented.

---

# 16. Conversion Design

The site must have purposeful conversion paths.

For employers, possible calls to action include:

- Discuss a hiring need
- Request talent
- Speak with a recruiting specialist
- Start a search
- Schedule an introduction

For candidates, possible calls to action include:

- Explore open roles
- Submit your résumé
- Join the talent network
- Speak with a recruiter

Calls to action should use specific language.

Do not use “Get Started” everywhere.

Every page should have:

- One primary objective
- One primary call to action
- Optional secondary actions
- A clear next step near the end of the page

---

# 17. Forms

Forms must be usable, accessible, and trustworthy.

Employer inquiry forms may request:

- Name
- Work email
- Company
- Role or hiring need
- Hiring timeline
- Employment type
- Message
- Consent where required

Candidate forms may request:

- Name
- Email
- Phone
- Location
- Area of expertise
- Role interests
- Résumé upload
- LinkedIn profile
- Work authorization information only where legally and operationally appropriate
- Consent where required

Do not request unnecessary sensitive information.

Every form must include:

- Visible labels
- Clear required-field indicators
- Inline validation
- Accessible error messages
- Loading state
- Success state
- Failure state
- Keyboard accessibility
- Screen reader support
- Spam protection strategy where applicable
- Privacy context where personal data is submitted

Do not fake successful form submissions.

If no backend exists, clearly implement a documented integration boundary or use the approved service.

---

# 18. Job Listings

If the site includes jobs, define whether listings are:

- Static
- Loaded from structured local data
- Connected to an ATS
- Connected to an external job board
- Managed through a CMS

Do not assume an ATS integration.

Potential job functionality includes:

- Search
- Location filter
- Department or specialty filter
- Employment type filter
- Individual job detail pages
- Share functionality
- External application links
- Accessible empty states

The experience must work without animation and without JavaScript-enhanced filters where reasonable.

Avoid copying recognizable layouts from major job platforms without adapting them to the firm.

---

# 19. Accessibility Requirements

Target WCAG 2.2 AA.

At minimum:

- Use semantic HTML
- Include a skip link
- Maintain logical heading order
- Support keyboard navigation
- Provide visible focus indicators
- Meet contrast requirements
- Label form controls
- Associate errors with fields
- Support reduced motion
- Avoid hover-only interactions
- Provide accessible mobile navigation
- Prevent focus traps
- Use appropriate ARIA only where native semantics are insufficient
- Give images correct alternative text
- Ensure touch targets are large enough
- Test at increased zoom
- Avoid text embedded in images when possible

Accessibility is not a final-stage cleanup task.

---

# 20. Responsive Requirements

Design and test intentionally for:

- Small mobile screens
- Large mobile screens
- Tablets
- Small laptops
- Standard desktop screens
- Wide screens

Do not simply stack all desktop content vertically on mobile.

Responsive behavior must address:

- Navigation
- Heading size
- Reading width
- Section spacing
- Grid collapse
- Image crops
- Tables
- Filters
- Forms
- Button width
- Sticky elements
- Motion behavior
- Footer composition

Avoid fragile breakpoint-specific fixes.

Test for horizontal overflow.

---

# 21. Performance Requirements

Prioritize fast initial rendering and stable layout.

Requirements include:

- Optimize images
- Use correct image dimensions
- Prevent layout shifts
- Avoid unnecessary client components
- Lazy-load non-critical media
- Minimize large animation dependencies
- Use font subsets where appropriate
- Avoid loading excessive font weights
- Remove unused packages
- Avoid autoplay background video unless explicitly justified
- Keep third-party scripts minimal
- Use server rendering and static generation appropriately
- Keep page transitions from delaying navigation

Target strong Core Web Vitals.

Do not trade substantial performance for subtle decorative effects.

---

# 22. SEO Requirements

Implement:

- Unique page titles
- Useful meta descriptions
- Canonical metadata where appropriate
- Open Graph metadata
- Social sharing images
- Structured heading hierarchy
- Semantic links
- Sitemap
- Robots configuration
- Organization structured data when accurate
- Job posting structured data when applicable and truthful
- Breadcrumb structured data where useful
- Clean URL structure

Do not add unsupported schema fields or fake job metadata.

---

# 23. Dark Mode

Do not add dark mode automatically.

Implement dark mode only if:

- It is part of the supplied requirements
- The brand system supports it
- It can be executed with equal quality
- Forms, imagery, borders, and contrast are fully considered

A poorly designed dark mode is not a bonus feature.

---

# 24. Things to Avoid

Do not use:

- Lucide React
- Inter by default
- Purple-to-blue gradients
- Neon glows
- Glassmorphism everywhere
- Huge rounded cards for every section
- Excessive pill-shaped elements
- Icons inside circles on every card
- Bento grids without a content reason
- Abstract blobs
- Generic mesh gradients
- Random 3D objects
- Sparkle icons
- “AI” visual motifs
- Floating dashboard mockups
- Fake statistics
- Fake testimonials
- Fake company logos
- Overly clever navigation
- Vague calls to action
- Excessive centered text
- Continuous marquees
- Carousels for content that should be visible
- Animations that delay reading
- Copy copied directly from competitors
- Component-library defaults left unchanged
- Large client-side bundles for simple effects

Do not optimize for screenshots at the expense of usability.

---

# 25. Validation Requirements

Before declaring a page or feature complete, verify:

## Engineering

- The project installs successfully
- The project builds successfully
- TypeScript passes
- Lint passes
- Formatting passes
- Tests pass
- No unexplained console warnings remain
- No dead imports or unused packages remain
- Environment variables are documented
- Error handling is present where needed

## Visual

- Layout is intentional on mobile and desktop
- Typography is consistent
- Spacing is coherent
- Images are properly cropped
- No text overlaps
- No horizontal overflow
- Interactive states are complete
- Components align with the design system
- The page does not resemble a generic template

## Accessibility

- Keyboard navigation works
- Focus is visible
- Forms are labeled
- Errors are announced
- Contrast is sufficient
- Motion preferences are respected
- Navigation is screen-reader usable
- Heading order is logical

## Content

- No lorem ipsum remains
- No fabricated claims are present
- Calls to action are specific
- Employer and candidate pathways are clear
- Supplied content has been represented accurately
- Placeholder content is explicitly identified

## Performance

- Images are optimized
- Layout shifts are minimized
- Client-side code is justified
- Major animation does not block interaction
- Mobile performance has been considered

---

# 26. Incremental Implementation and Commits

Work in coherent phases.

Suggested commit sequence:

1. Project scaffold and tooling
2. Global design tokens and typography
3. Navigation and shared layout
4. Homepage foundation
5. Employer journey
6. Candidate journey
7. Industry or specialty pages
8. Forms and conversion flows
9. Insights or supporting pages
10. Taste and Impeccable refinements
11. Motion and interaction refinement
12. Accessibility, performance, and SEO
13. Final validation and cleanup

Each commit should:

- Represent a coherent unit of work
- Use a clear message
- Keep the project buildable where practical
- Avoid mixing unrelated refactors with feature implementation

Do not create meaningless commits after every file edit.

---

# 27. Decision Log

Record meaningful architectural and design decisions.

For each major decision, include:

- Decision
- Context
- Alternatives considered
- Rationale
- Consequences
- Follow-up work, if any

Examples:

- Font selection
- Animation library selection
- ATS integration approach
- Content storage strategy
- Form provider
- CMS decision
- Icon system
- Page architecture
- Major deviation from supplied branding

---

# 28. Agent Handoff Requirements

At the end of every substantial work session, update the project handoff documentation.

The handoff must state:

- What was completed
- What is currently in progress
- What remains
- Files changed
- Decisions made
- Assumptions made
- Known issues
- Validation performed
- Validation still required
- Recommended next action

The next agent should not need to reconstruct project history from Git commits alone.

Never mark work complete when major parts are placeholders.

---

# 29. Required Project Documentation

Create and maintain the following files where useful:

```text
AGENTS.md
docs/
  BRAND_DIRECTION.md
  INFORMATION_ARCHITECTURE.md
  DESIGN_SYSTEM.md
  TECHNICAL_ARCHITECTURE.md
  IMPLEMENTATION_PLAN.md
  IMPLEMENTATION_STATUS.md
  DECISIONS.md
  CONTENT_GAPS.md
  QA_CHECKLIST.md
```

## `AGENTS.md`

Contains permanent instructions for all agents, including:

- Required skill sequence
- Engineering rules
- Design restrictions
- Validation requirements
- Handoff rules

## `BRAND_DIRECTION.md`

Contains:

- Brand attributes
- Audience
- Positioning
- Typography direction
- Color direction
- Image direction
- Shape language
- Motion personality
- Anti-patterns

## `INFORMATION_ARCHITECTURE.md`

Contains:

- Route map
- Page purposes
- Audience for each page
- Primary calls to action
- Content relationships

## `DESIGN_SYSTEM.md`

Contains:

- Tokens
- Typography
- Spacing
- Components
- States
- Responsive principles
- Motion tokens

## `TECHNICAL_ARCHITECTURE.md`

Contains:

- Stack
- Folder structure
- Rendering strategy
- Data flow
- Form integrations
- External services
- Deployment assumptions

## `IMPLEMENTATION_PLAN.md`

Contains:

- Phases
- Dependencies
- Priorities
- Acceptance criteria
- Risks

## `IMPLEMENTATION_STATUS.md`

Contains:

- Completed work
- Current work
- Remaining work
- Blockers
- Known issues
- Last validation results

## `DECISIONS.md`

Contains the decision log.

## `CONTENT_GAPS.md`

Contains:

- Missing content
- Missing assets
- Unverified claims
- Placeholder requirements
- Questions requiring stakeholder input

## `QA_CHECKLIST.md`

Contains reusable checks for:

- Functional testing
- Responsive testing
- Accessibility
- Visual review
- Performance
- SEO
- Content accuracy

---

# 30. Definition of Done

The project is complete only when:

- The primary pages are implemented
- Employer and candidate journeys are clear
- The site accurately reflects the supplied brand
- The Taste direction has been applied
- The Impeccable refinement pass has been completed
- The Emil Kowalski motion pass has been completed
- Motion is restrained and purposeful
- All critical forms work or have a clearly documented integration boundary
- Mobile and desktop layouts are complete
- Accessibility checks have been performed
- SEO metadata is present
- The production build passes
- TypeScript and lint checks pass
- No fabricated content remains
- No unmarked placeholders remain
- Documentation is current
- A new agent can understand the project state from the handoff files
- The website feels designed specifically for this recruiting firm

---

# 31. Initial Agent Execution Prompt

When beginning work, follow this exact operating sequence:

1. Read this document completely.
2. Inspect the repository and all supplied assets.
3. Identify existing instructions and possible conflicts.
4. Produce a repository assessment.
5. Create a content and route inventory.
6. Use the Taste skill to establish the creative direction.
7. Record the direction in `docs/BRAND_DIRECTION.md`.
8. Propose the technical and component architecture.
9. Scaffold the Next.js application.
10. Establish design tokens and foundational components.
11. Build the highest-priority user journeys.
12. Validate each vertical slice as it is completed.
13. Use the Impeccable skill to critique and refine the implemented interface.
14. Implement the Impeccable findings.
15. Use the Emil Kowalski skill to refine motion and interaction.
16. Remove unnecessary animation.
17. Perform the combined Taste, Impeccable, and motion review.
18. Run all required checks.
19. Update the implementation status and decision log.
20. Leave a complete handoff for the next agent.

Do not skip directly to visual implementation.

Do not treat the skill outputs as suggestions to copy blindly. Reconcile them with the supplied brand, content, technical constraints, and audience needs.

---

# 32. Final Agent Instruction

Build deliberately.

The objective is not to maximize the number of components, visual effects, pages, or dependencies. The objective is to create the most credible, clear, polished, and distinctive recruiting experience possible from the supplied brand and content.

When choosing between two approaches, prefer the one that:

- Communicates more clearly
- Better reflects the brand
- Requires less explanation
- Uses fewer dependencies
- Performs better
- Remains accessible
- Is easier to maintain
- Feels more intentional
- Avoids familiar AI-generated design patterns

Do not confuse decoration with design.

Do not confuse animation with interaction quality.

Do not confuse component quantity with product completeness.