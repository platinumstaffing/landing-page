// Approved brand copy from the Brand Identity guide + copy deck. Do not invent
// leadership names, bios, or dates beyond what is confirmed here (founded 2019).

import type { ImageAsset } from "@/content/image-asset";
import { pageImages } from "@/content/page-images";

export const ourStory = [
  "Platinum Staffing & Recruitment was founded with a simple mission: to connect exceptional talent with outstanding employers.",
  "We recognized that businesses need more than candidates. They need workforce partners who understand their hiring challenges, respond quickly, and consistently deliver qualified professionals. That vision continues to guide everything we do today.",
  "Over the years, Platinum Staffing has built lasting relationships with employers across multiple industries while helping thousands of professionals find meaningful employment opportunities. As we continue to grow, our focus remains the same: delivering workforce solutions built on trust, responsiveness, and long-term partnership.",
] as const;

export const mission =
  "To connect businesses with dependable talent through responsive workforce solutions while creating meaningful employment opportunities that strengthen organizations, individuals, and the communities we serve.";

export const vision =
  "To become one of the most trusted workforce solutions partners by helping employers build stronger teams and empowering professionals to achieve long-term career success.";

export const coreValues = [
  {
    name: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability in every relationship.",
  },
  {
    name: "Partnership",
    description:
      "We believe successful staffing begins with understanding our clients' goals and working together to achieve them.",
  },
  {
    name: "Excellence",
    description:
      "We strive to deliver exceptional service and qualified professionals who create lasting value.",
  },
  {
    name: "Responsiveness",
    description:
      "We understand that workforce needs change quickly, and we respond with urgency, flexibility, and professionalism.",
  },
  {
    name: "Opportunity",
    description:
      "We believe meaningful employment strengthens businesses, individuals, and communities.",
  },
] as const;

export const leadershipIntro =
  "Our leadership team is committed to delivering exceptional workforce solutions through integrity, experience, and personalized service. Every decision is guided by our commitment to helping employers build dependable teams while creating opportunities for professionals to grow their careers.";

export const whyPlatinumIntro = [
  "Employers choose Platinum Staffing because we take the time to understand their business, workforce goals, and hiring challenges before recommending staffing solutions.",
  "Our approach combines industry expertise, a growing network of qualified professionals, responsive communication, and personalized service to deliver workforce solutions that support long-term business success.",
] as const;

export const whyPlatinumPillars = [
  {
    id: "industry-expertise",
    title: "Industry Expertise",
    description:
      "We staff the sectors we know — manufacturing, warehouse and distribution, logistics, administrative support, customer service, and light industrial — so recommendations match how the work actually gets done.",
  },
  {
    id: "talent-network",
    title: "Extensive Talent Network",
    description:
      "A growing network of more than 40,000 professionals, with more than 10,000 successful placements since 2019, gives employers access to people who are ready to contribute.",
  },
  {
    id: "responsive-service",
    title: "Responsive Service",
    description:
      "Workforce needs change quickly. We respond with urgency, clear communication, and a staffing approach that can flex with demand.",
  },
  {
    id: "long-term-partnerships",
    title: "Long-Term Workforce Partnerships",
    description:
      "Placement is the start of the relationship, not the end. We stay available for future hiring, seasonal peaks, and longer workforce planning.",
  },
] as const;

export const careersIntro = [
  "Whether you're entering the workforce, seeking a new opportunity, or advancing your career, Platinum Staffing & Recruitment is committed to helping you succeed.",
  "We partner with employers across multiple industries to connect talented professionals with opportunities that align with their experience, skills, and career goals.",
] as const;

export type AboutPage = {
  slug:
    | "our-story"
    | "mission-vision-values"
    | "leadership"
    | "why-platinum"
    | "careers";
  href: string;
  label: string;
  index: string;
  headline: string;
  summary: string;
  description: string;
  image?: ImageAsset;
};

export const aboutPages: AboutPage[] = [
  {
    slug: "our-story",
    href: "/about/our-story",
    label: "Our Story",
    index: "01.1",
    headline: "Our Journey",
    summary:
      "How Platinum Staffing began — and why partnership still guides the work.",
    description:
      "From a simple founding mission to a growing network of employers and professionals, the story is about trust, responsiveness, and long-term partnership.",
    image: pageImages.companyJourney,
  },
  {
    slug: "mission-vision-values",
    href: "/about/mission-vision-values",
    label: "Mission, Vision & Values",
    index: "01.2",
    headline: "What we stand for",
    summary:
      "The mission, vision, and five core values that shape every placement.",
    description:
      "Integrity, partnership, excellence, responsiveness, and opportunity are not wall copy. They are the standard we hold ourselves to with every employer and every professional.",
    image: pageImages.missionInPractice,
  },
  {
    slug: "leadership",
    href: "/about/leadership",
    label: "Leadership",
    index: "01.3",
    headline: "Leadership that puts people first",
    summary:
      "A people-first leadership philosophy — biographies will be published as they are confirmed.",
    description:
      "Every decision is guided by a commitment to dependable teams for employers and meaningful careers for professionals.",
    image: pageImages.teamCulture,
  },
  {
    slug: "why-platinum",
    href: "/about/why-platinum",
    label: "Why Platinum",
    index: "01.4",
    headline: "Why employers choose Platinum Staffing & Recruitment",
    summary:
      "Industry knowledge, a growing talent network, and a partnership that lasts past placement.",
    description:
      "We take the time to understand the business before recommending a staffing model — then stay accountable for the result.",
    image: pageImages.valuesOnTheFloor,
  },
  {
    slug: "careers",
    href: "/about/careers",
    label: "Careers at Platinum",
    index: "01.5",
    headline: "Grow your career with Platinum",
    summary:
      "Search open positions or join the talent network. Internal openings will be listed as they are confirmed.",
    description:
      "Whether you are entering the workforce or looking for the next step, we connect people with employers who value their skills.",
  },
];

export function getAboutPage(slug: string): AboutPage | undefined {
  return aboutPages.find((page) => page.slug === slug);
}
