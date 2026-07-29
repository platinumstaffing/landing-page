# Homepage Image Direction

## Purpose

These prompts replace the designed SVG art-direction frames in `public/brand/home/`.
The final set should feel like one documentary assignment photographed across real
Pennsylvania workplaces, not a collection of unrelated stock images.

The five diagrammatic illustrations for the interactive employer process are documented
separately in `docs/PARTNERSHIP_JOURNEY_IMAGE_PROMPTS.md`.

## Shared production rules

- Photorealistic documentary workplace photography.
- Natural, observational moments. Subjects do not face or perform for the camera.
- Representative diversity across the complete set without tokenized casting.
- Accurate PPE, safe equipment use, and plausible workplace separation.
- Slightly cool neutral grade with controlled contrast and natural skin tones.
- Real overhead or window light. No dramatic fog, bloom, colored lighting, or glow.
- No third-party logos, readable company names, uniforms with brands, or license plates.
- No handshakes, transparent screens, celebration poses, fake meetings, or embedded text.
- No ultra-wide distortion, excessive shallow depth of field, or artificial HDR.
- Preserve the requested negative space and focal point so responsive crops remain useful.

## Asset specifications

| ID | Replacement filename | Target size | Crop | Focal point | Placement |
| --- | --- | ---: | --- | --- | --- |
| 01 | `hero.webp` | 2400 × 1500 | 16:10 | Center-right activity | Homepage hero |
| 02 | `employer-partnership.webp` | 1600 × 2000 | 4:5 | People centered | Why Platinum |
| 03 | `manufacturing.webp` | 1800 × 1350 | 4:3 | Operator center-right | Industries stage |
| 04 | `warehouse-distribution.webp` | 1800 × 1350 | 4:3 | Worker center | Industries stage |
| 05 | `logistics.webp` | 1800 × 1350 | 4:3 | Worker center-left | Industries stage |
| 06 | `administrative-support.webp` | 1800 × 1350 | 4:3 | Professional center-right | Industries stage |
| 07 | `customer-service.webp` | 1800 × 1350 | 4:3 | Professional center | Industries stage |
| 08 | `light-industrial.webp` | 1800 × 1350 | 4:3 | Hands and worker center | Industries stage |
| 09 | `candidate-pathway.webp` | 2100 × 1400 | 3:2 | Worker center-left | Job seeker pathway |
| 10 | `employer-resource.webp` | 1800 × 1200 | 3:2 | Documents and manager center | Employer resource |
| 11 | `career-resource.webp` | 1800 × 1200 | 3:2 | Job seeker center-right | Career resource |
| 12 | `staffing-models.webp` | 1800 × 1350 | 4:3 | People and plan centered | Staffing models |

After adding final files, update only the corresponding `src` values in
`src/content/home-images.ts`. The section components, dimensions, crops, captions, and
alternative text do not need to change.

## 01. Hero

**Prompt**

> Wide documentary photograph inside an active Pennsylvania manufacturing facility
> during a normal shift. Skilled workers are naturally distributed through the middle
> and right side of the frame, with one supervisor visible but not posed. Real production
> equipment, practical safety barriers, accurate PPE, and overhead industrial lighting.
> The scene feels capable, calm, and current rather than glossy. Slightly cool neutral
> color grade. Preserve generous visual breathing room through the left third and keep
> important faces and equipment inside the center-right safe crop. Eye-level 35mm
> documentary perspective, 16:10 landscape.

**Negative prompt**

> Handshakes, camera-facing smiles, office boardroom, laptop interface, transparent
> screens, robots, futuristic machinery, cinematic fog, colored light, dramatic sparks,
> visible logos, text, unsafe PPE, distorted hands, fisheye lens.

**Alt text draft**

> Workers and a supervisor moving through an active manufacturing floor.

## 02. Employer partnership

**Prompt**

> Candid side-angle documentary photograph of an operations supervisor and staffing
> partner reviewing a real production schedule near the manufacturing floor. Two diverse
> professionals in safety-aware clothing, focused on a tactile clipboard or paper plan,
> with controlled industrial activity in the background. Calm authority, practical
> conversation, no celebration or sales posture. Natural industrial light, realistic skin
> tones, 4:5 portrait.

**Negative prompt**

> Handshake, contract signing, posed boardroom, both subjects looking at camera, fake
> laughter, glass office, branded clothing, floating charts, excessive bokeh.

**Alt text draft**

> An operations supervisor and staffing partner reviewing a production schedule.

## 03. Manufacturing

**Prompt**

> Skilled machine operator inspecting a production line in a clean Pennsylvania facility.
> Visible machine detail, authentic PPE, focused working posture, and realistic safety
> spacing. Capture process and concentration, not a portrait. Natural overhead light,
> restrained cool-neutral grade, 4:3 landscape.

**Negative prompt**

> Camera-facing pose, sparks for drama, unsafe open machinery, futuristic factory, robotic
> arms as the subject, visible brand marks, neon light.

**Alt text draft**

> A skilled operator inspecting equipment on a production line.

## 04. Warehouse and distribution

**Prompt**

> Active warehouse distribution aisle with a worker scanning inventory in the foreground
> and forklift activity safely separated in the background. Strong aisle geometry, real
> pallets and shelving, natural operational lighting, accurate high-visibility PPE.
> Documentary moment with no subject looking at camera, 4:3 landscape.

**Negative prompt**

> Empty warehouse, unsafe forklift proximity, exaggerated stacks, staged smile, pristine
> showroom, visible shipping logos, motion blur that hides the work.

**Alt text draft**

> A warehouse professional scanning inventory in an active distribution aisle.

## 05. Logistics

**Prompt**

> Daylight loading-dock coordination at a working distribution facility. A logistics
> professional checks outbound freight while trailers, dock doors, and loading architecture
> create depth. Practical high-visibility clothing, believable freight, and natural
> movement. Documentary 35mm perspective, 4:3 landscape.

**Negative prompt**

> Highway truck hero shot, dramatic sunset, unsafe loading, visible carrier logos, posed
> driver portrait, fake tablet interface.

**Alt text draft**

> A logistics professional coordinating outbound freight at a loading dock.

## 06. Administrative support

**Prompt**

> Administrative professional coordinating schedules in a real operations office adjacent
> to an industrial facility. Candid concentration with paper schedules, a normal monitor,
> and subtle facility context through a window or open doorway. Professional but practical,
> not a corporate executive office. Natural mixed light, 4:3 landscape.

**Negative prompt**

> Staged boardroom, luxury office, camera-facing smile, oversized headset, fake charts,
> transparent screen, visible software branding.

**Alt text draft**

> An administrative professional coordinating an operations schedule.

## 07. Customer service

**Prompt**

> Customer service professional handling a real call in a calm operations environment.
> Natural expression, attentive posture, and colleagues softly present in the background.
> The setting feels focused and supportive, with ordinary equipment and no staged grin.
> Documentary eye-level photograph, 4:3 landscape.

**Negative prompt**

> Call-center stock-photo smile, everyone facing camera, neon office, oversized microphone,
> fake celebration, visible company branding.

**Alt text draft**

> A customer service professional assisting someone by phone.

## 08. Light industrial

**Prompt**

> Team member performing careful assembly or packaging work at a safe, orderly station.
> Tactile materials, visible process detail, accurate protective equipment, and focused
> hands. Show the person and the work together without turning the image into a product
> close-up. Natural workplace light, 4:3 landscape.

**Negative prompt**

> Disembodied hands, unsafe station, food production unless PPE is accurate, cluttered
> chaos, camera-facing pose, exaggerated sparks, visible labels.

**Alt text draft**

> A light industrial worker completing careful assembly at an organized station.

## 09. Candidate pathway

**Prompt**

> Documentary photograph of a worker arriving confidently for a shift or walking through
> the workplace with a supervisor. The interaction feels respectful, human, and optimistic
> without becoming celebratory or staged. Practical clothing, accurate workplace context,
> and room in the right side of the composition for responsive cropping. Natural daylight
> or soft facility light, 3:2 landscape.

**Negative prompt**

> Handshake, jumping celebration, graduation imagery, camera-facing group portrait,
> briefcase cliché, office tower, branded uniforms.

**Alt text draft**

> A worker walking into the workplace with support from a supervisor.

## 10. Employer resource

**Prompt**

> Hiring manager reviewing workforce plans at a practical worktable with operational
> documents, shift notes, and facility context. Editorial overhead or three-quarter
> perspective, authentic materials, restrained color, and no readable confidential
> information. 3:2 landscape.

**Negative prompt**

> Perfect flat-lay desk, luxury stationery, staged coffee cup, readable names, fake data
> dashboard, visible company logo, decorative plants as the subject.

**Alt text draft**

> A hiring manager reviewing workforce plans and shift documents.

## 11. Career resource

**Prompt**

> Job seeker preparing application materials or speaking with a recruiter in a modest,
> professional setting. Supportive candid interaction, ordinary desk materials, natural
> posture, and a calm sense of preparation. No interview handshake and no one facing the
> camera. Natural window light, 3:2 landscape.

**Negative prompt**

> Handshake, corporate boardroom, staged interview panel, laptop with readable résumé,
> celebratory pose, visible company branding, generic headset.

**Alt text draft**

> A job seeker preparing application materials with support from a recruiter.

## 12. Staffing models

**Prompt**

> Documentary photograph of a staffing strategist and operations leader mapping shift
> requirements at a practical table near an active facility. A paper schedule, role notes,
> and a simple workforce plan are visible without readable confidential information. The
> two professionals are engaged in the work rather than facing the camera. Include enough
> industrial context to connect the plan to real operations, with accurate safety-aware
> clothing, natural overhead light, and a calm cool-neutral grade. 4:3 landscape.

**Negative prompt**

> Handshake, sales presentation, staged boardroom, floating charts, transparent screens,
> readable employee data, branded uniforms, camera-facing smiles, luxury office, generic
> laptop meeting.

**Alt text draft**

> A staffing strategist and operations leader mapping shift requirements together.
