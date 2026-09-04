import type { FaqItem } from "@/content/faqs";
import type { ImageAsset } from "@/content/image-asset";
import { pageImages } from "@/content/page-images";

export type SolutionSlug =
  | "temporary-staffing"
  | "temp-to-hire"
  | "direct-hire"
  | "seasonal-staffing"
  | "high-volume-staffing"
  | "workforce-planning";

export type Solution = {
  slug: SolutionSlug;
  name: string;
  summary: string;
  href: string;
  headline: string;
  lede: string;
  ctaLabel: string;
  benefitsTitle: string;
  benefits: string[];
  processTitle: string;
  process: string[];
  positions: string[];
  faqs: FaqItem[];
  heroTone: "canvas" | "muted";
  image: ImageAsset;
  index: string;
};

export const solutions: Solution[] = [
  {
    slug: "temporary-staffing",
    name: "Temporary Staffing",
    summary:
      "Reliable professionals ready to support short-term staffing needs.",
    href: "/employers/temporary-staffing",
    headline: "Flexible staffing solutions when you need them most.",
    lede: "Business demands can change quickly. Whether you're covering employee absences, managing seasonal demand, or responding to unexpected workforce shortages, Platinum Staffing & Recruitment provides qualified temporary professionals who help your business maintain productivity without long-term hiring commitments.",
    ctaLabel: "Request Temporary Staff",
    benefitsTitle: "Why Temporary Staffing",
    benefits: [
      "Reduce hiring time",
      "Maintain productivity",
      "Lower recruitment costs",
      "Scale your workforce quickly",
      "Minimize overtime",
      "Access pre-screened candidates",
    ],
    processTitle: "Our Process",
    process: [
      "Consultation",
      "Workforce Assessment",
      "Candidate Recruitment",
      "Placement",
      "Ongoing Support",
    ],
    positions: [
      "Production Associates",
      "Warehouse Associates",
      "Forklift Operators",
      "Packers",
      "Assemblers",
      "Shipping & Receiving",
      "Office Assistants",
      "Customer Service Representatives",
    ],
    faqs: [
      {
        id: "temp-speed",
        question: "How quickly can temporary workers be placed?",
        answer:
          "Timelines depend on the role, shift, and volume. After we understand your requirements, we begin recruiting immediately from our talent network and share a realistic placement timeline.",
      },
      {
        id: "temp-industries",
        question: "What industries do you support?",
        answer:
          "We support temporary staffing across manufacturing, warehouse and distribution, logistics, administrative support, customer service, and light industrial operations.",
      },
      {
        id: "temp-screening",
        question: "How are candidates screened?",
        answer:
          "Candidates are recruited, interviewed, and screened against the requirements of each assignment before being presented for placement consideration.",
      },
      {
        id: "temp-extend",
        question: "Can temporary assignments be extended?",
        answer:
          "Yes. Many temporary assignments can be extended when business needs continue, and we coordinate those changes with your team.",
      },
      {
        id: "temp-fit",
        question: "What happens if a placement is not the right fit?",
        answer:
          "Tell us promptly. We work with you to understand the gap and present alternate candidates so operations stay supported.",
      },
    ],
    heroTone: "canvas",
    image: pageImages.temporaryStaffing,
    index: "02.1",
  },
  {
    slug: "temp-to-hire",
    name: "Temp-to-Hire",
    summary: "Evaluate employees before making a permanent hiring decision.",
    href: "/employers/temp-to-hire",
    headline: "Hire with confidence before making a permanent commitment.",
    lede: "Our Temp-to-Hire solution allows employers to evaluate candidates in a real work environment before extending a permanent offer. This approach reduces hiring risk while giving your organization the opportunity to assess performance, reliability, and cultural fit.",
    ctaLabel: "Request Temp-to-Hire Talent",
    benefitsTitle: "Benefits of Temp-to-Hire",
    benefits: [
      "Reduce hiring risk",
      "Evaluate real-time performance",
      "Assess cultural fit",
      "Improve retention",
      "Make informed hiring decisions",
    ],
    processTitle: "How It Works",
    process: [
      "Consultation",
      "Candidate Recruitment",
      "Temporary Assignment",
      "Performance Evaluation",
      "Permanent Hire",
    ],
    positions: [
      "Production Associates",
      "Warehouse Associates",
      "Administrative Assistants",
      "Customer Service Representatives",
      "Forklift Operators",
      "Shipping and Receiving Staff",
      "Supervisors",
      "Operations Support Staff",
    ],
    faqs: [
      {
        id: "tth-period",
        question: "How long is the evaluation period?",
        answer:
          "Evaluation periods are tailored to the role and your hiring preferences. During discovery we confirm a timeline that gives your team enough time to assess performance and fit.",
      },
      {
        id: "tth-early",
        question:
          "Can the employee be hired before the evaluation period ends?",
        answer:
          "Yes. If the candidate is clearly the right fit, we can discuss converting earlier so you can move forward with confidence.",
      },
      {
        id: "tth-payroll",
        question: "Who manages payroll during the temporary period?",
        answer:
          "During the temporary evaluation period, Platinum Staffing manages the employment relationship and payroll according to the agreed staffing arrangement.",
      },
      {
        id: "tth-screening",
        question: "How are candidates screened?",
        answer:
          "We source, interview, and screen candidates against the requirements of the role before placement so you can evaluate qualified professionals on the job.",
      },
      {
        id: "tth-fit",
        question: "What happens if the candidate is not the right fit?",
        answer:
          "We stay available throughout the assignment. If a candidate is not the right match, we discuss next steps and work to present alternatives.",
      },
    ],
    heroTone: "muted",
    image: pageImages.tempToHire,
    index: "02.2",
  },
  {
    slug: "direct-hire",
    name: "Direct Hire",
    summary:
      "Connect with highly qualified candidates for permanent positions.",
    href: "/employers/direct-hire",
    headline: "Permanent hiring solutions for long-term success.",
    lede: "Finding the right permanent employee requires time, expertise, and a strong recruitment strategy. Platinum Staffing manages candidate sourcing, screening, and recruitment so your organization can focus on selecting professionals who support long-term business success.",
    ctaLabel: "Request Direct Hire",
    benefitsTitle: "Why Direct Hire",
    benefits: [
      "Save recruitment time",
      "Access qualified professionals",
      "Strengthen candidate quality",
      "Reduce hiring delays",
      "Support long-term retention",
    ],
    processTitle: "Recruitment Process",
    process: [
      "Discovery Consultation",
      "Candidate Sourcing",
      "Candidate Screening",
      "Interview Coordination",
      "Candidate Presentation",
      "Hiring Support",
    ],
    positions: [
      "Administrative Professionals",
      "Customer Service Professionals",
      "Technical Roles",
      "Supervisors",
      "Operations Managers",
      "Human Resources Professionals",
      "Skilled Industrial Professionals",
      "Leadership Roles",
    ],
    faqs: [
      {
        id: "dh-roles",
        question: "What types of permanent positions do you recruit for?",
        answer:
          "We recruit for permanent roles across manufacturing, warehouse and distribution, logistics, administrative support, customer service, and light industrial operations, including supervisory and operations support positions.",
      },
      {
        id: "dh-screening",
        question: "How are candidates screened?",
        answer:
          "Candidates are sourced, interviewed, and screened against the requirements of each permanent role before presentation so your team can focus on final selection.",
      },
      {
        id: "dh-timeline",
        question: "How long does the recruitment process take?",
        answer:
          "Timelines vary by role complexity and market availability. After discovery, we share a realistic search plan and keep you informed throughout the process.",
      },
      {
        id: "dh-jd",
        question: "Can we submit a job description?",
        answer:
          "Yes. A clear job description helps us recruit more effectively. Share it through the Request Talent form or during your consultation.",
      },
      {
        id: "dh-next",
        question: "What happens after candidates are presented?",
        answer:
          "We coordinate interviews, gather feedback, and support the hiring conversation so you can move from presentation to offer with clarity.",
      },
    ],
    heroTone: "canvas",
    image: pageImages.directHire,
    index: "02.3",
  },
  {
    slug: "seasonal-staffing",
    name: "Seasonal Staffing",
    summary: "Scale your workforce during peak business seasons.",
    href: "/employers/seasonal-staffing",
    headline: "Scale your workforce during peak business seasons.",
    lede: "Whether preparing for holiday demand, production increases, seasonal volume, or special projects, Platinum Staffing provides dependable seasonal professionals who help your business remain productive during its busiest periods.",
    ctaLabel: "Request Seasonal Staff",
    benefitsTitle: "Seasonal Staffing Benefits",
    benefits: [
      "Hire quickly for peak periods",
      "Scale without long-term commitments",
      "Reduce employee overtime",
      "Maintain productivity",
      "Meet customer and production demands",
    ],
    processTitle: "Our Hiring Process",
    process: [
      "Consultation",
      "Workforce Planning",
      "Recruitment",
      "Screening",
      "Placement",
      "Ongoing Support",
    ],
    positions: [
      "Production Associates",
      "Warehouse Associates",
      "Packers",
      "Material Handlers",
      "Customer Service Representatives",
      "Shipping & Receiving",
      "General Labor Professionals",
    ],
    faqs: [
      {
        id: "seasonal-early",
        question: "How early should we begin seasonal hiring?",
        answer:
          "Earlier planning generally improves candidate availability. Contact us as soon as peak needs are visible so we can build a staffing plan around your start dates.",
      },
      {
        id: "seasonal-extend",
        question: "Can seasonal assignments be extended?",
        answer:
          "Yes. When peak demand continues, seasonal assignments can often be extended or adjusted based on operational needs.",
      },
      {
        id: "seasonal-roles",
        question: "What types of seasonal roles can you fill?",
        answer:
          "We commonly fill seasonal production, warehouse, packaging, shipping, customer service, and light industrial roles aligned to peak operational demand.",
      },
      {
        id: "seasonal-speed",
        question: "How quickly can workers be placed?",
        answer:
          "Speed depends on volume, shift requirements, and role complexity. We prioritize seasonal hiring plans early and recruit against confirmed start dates.",
      },
      {
        id: "seasonal-convert",
        question: "Can seasonal employees transition to permanent roles?",
        answer:
          "Yes. Strong seasonal performers can often be considered for longer assignments or permanent opportunities when the business need continues.",
      },
    ],
    heroTone: "muted",
    image: pageImages.seasonalStaffing,
    index: "02.4",
  },
  {
    slug: "high-volume-staffing",
    name: "High-Volume Staffing",
    summary:
      "Efficient recruitment solutions for organizations hiring multiple employees.",
    href: "/employers/high-volume-staffing",
    headline: "High-volume recruitment built for growing businesses.",
    lede: "When your organization needs to hire multiple employees within a short timeframe, Platinum Staffing delivers scalable recruitment solutions designed to maintain quality while meeting demanding hiring deadlines.",
    ctaLabel: "Request High-Volume Staffing",
    benefitsTitle: "High-Volume Staffing Is Ideal For",
    benefits: [
      "Facility openings",
      "Business expansion",
      "Peak production",
      "New contracts",
      "Warehouse launches",
      "Distribution growth",
      "Large seasonal hiring needs",
    ],
    processTitle: "Our Recruitment Strategy",
    process: [
      "Workforce Planning",
      "Recruitment Campaign Development",
      "Candidate Sourcing",
      "Candidate Screening",
      "Interview Coordination",
      "Placement Management",
      "Ongoing Workforce Support",
    ],
    positions: [
      "Production Associates",
      "Warehouse Associates",
      "Material Handlers",
      "Assemblers",
      "Packaging Associates",
      "Shipping & Receiving",
      "Customer Service Representatives",
      "Operations Support Staff",
    ],
    faqs: [
      {
        id: "hv-volume",
        question: "How many employees can Platinum recruit at one time?",
        answer:
          "We support hiring projects of varying scale. During discovery we confirm volume, roles, shifts, and timeline so the recruitment plan matches your operational capacity.",
      },
      {
        id: "hv-start",
        question: "How quickly can a high-volume hiring project begin?",
        answer:
          "Once requirements are clear, we can begin workforce planning and recruitment promptly. Larger projects benefit from early coordination around start dates and screening capacity.",
      },
      {
        id: "hv-shifts",
        question: "Can you support multiple shifts?",
        answer:
          "Yes. High-volume projects often include first, second, third, or rotating shifts, and we recruit against those requirements from the start.",
      },
      {
        id: "hv-screening",
        question: "How are large groups of candidates screened?",
        answer:
          "We structure sourcing and screening around the project plan so candidates are evaluated consistently against role requirements before presentation or placement.",
      },
      {
        id: "hv-locations",
        question: "Can hiring take place across multiple locations?",
        answer:
          "Yes. Share the locations and role requirements for each site, and we will coordinate recruitment accordingly.",
      },
    ],
    heroTone: "canvas",
    image: pageImages.highVolumeStaffing,
    index: "02.5",
  },
  {
    slug: "workforce-planning",
    name: "Workforce Planning",
    summary:
      "Strategic staffing solutions that help employers prepare for future workforce demands.",
    href: "/employers/workforce-planning",
    headline: "Workforce planning that prepares you for what comes next.",
    lede: "Successful workforce management requires planning beyond today's hiring needs. Our team works with employers to understand workforce trends, anticipate hiring demands, and develop recruitment strategies that support sustainable business growth.",
    ctaLabel: "Discuss Workforce Planning",
    benefitsTitle: "Why Workforce Planning",
    benefits: [
      "Anticipate hiring demand before it becomes urgent",
      "Align staffing models with operational goals",
      "Reduce reactive hiring pressure",
      "Prepare for seasonal and project-based demand",
      "Build a more dependable long-term talent pipeline",
    ],
    processTitle: "How Planning Works",
    process: [
      "Discovery Consultation",
      "Workforce Assessment",
      "Hiring Forecast Review",
      "Staffing Strategy Design",
      "Recruitment Roadmap",
      "Ongoing Partnership",
    ],
    positions: [
      "Production Associates",
      "Warehouse Associates",
      "Logistics Coordinators",
      "Administrative Assistants",
      "Customer Service Representatives",
      "Supervisors",
      "Operations Support Staff",
    ],
    faqs: [
      {
        id: "wp-when",
        question: "When should employers begin workforce planning?",
        answer:
          "Whenever hiring volume, seasons, expansions, or recurring shortages are visible on the horizon. Earlier planning gives more time to recruit against confirmed needs.",
      },
      {
        id: "wp-includes",
        question: "What does a workforce planning engagement include?",
        answer:
          "We review your operational goals, current staffing gaps, role requirements, and timeline, then recommend a staffing approach that can include temporary, seasonal, temp-to-hire, or direct-hire support.",
      },
      {
        id: "wp-vs-staffing",
        question: "How is workforce planning different from requesting talent?",
        answer:
          "Request Talent starts a current hiring need. Workforce planning looks further ahead so recruitment strategy, volume, and timing are aligned before demand peaks.",
      },
      {
        id: "wp-industries",
        question: "Which industries benefit from workforce planning?",
        answer:
          "Manufacturing, warehouse and distribution, logistics, administrative support, customer service, and light industrial employers all benefit when hiring demand is planned rather than reactive.",
      },
    ],
    heroTone: "muted",
    image: pageImages.workforcePlanning,
    index: "02.6",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export const employerPillars = [
  {
    id: "expertise",
    title: "Industry Expertise",
    description:
      "Recruitment strategies built around your industry’s unique workforce needs.",
  },
  {
    id: "talent",
    title: "Reliable Talent",
    description:
      "Access to a growing network of more than 40,000 professionals.",
  },
  {
    id: "responsive",
    title: "Responsive Partnership",
    description:
      "Fast communication, personalized support, and dependable service throughout every hiring engagement.",
  },
  {
    id: "long-term",
    title: "Long-Term Workforce Solutions",
    description:
      "Workforce solutions designed to support your business today while preparing for tomorrow’s growth.",
  },
] as const;
