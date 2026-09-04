// Resource Center category directory. Approved category descriptions from the copy
// deck. No published articles exist yet (see docs/CONTENT_GAPS.md), so category
// pages frame the topic honestly rather than linking to non-existent articles.

import type { ImageAsset } from "@/content/image-asset";
import { pageImages, reusedPageImages } from "@/content/page-images";

export type ResourceCategory = {
  id: string;
  slug: string;
  href: string;
  name: string;
  description: string;
  audience: "Employers" | "Job Seekers" | "Both";
  index: string;
  headline: string;
  lede: string;
  cta: { label: string; href: string };
  topics: string[];
  image?: ImageAsset;
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: "insights",
    slug: "workforce-insights",
    href: "/resources/workforce-insights",
    name: "Workforce Insights",
    description:
      "Articles and commentary exploring employment trends, workforce planning, recruitment practices, employee retention, and changes affecting employers and professionals.",
    audience: "Both",
    index: "07.1",
    headline: "Insights for a Changing Workforce",
    lede: "A place for practical commentary on hiring, retention, and workforce planning — written for employers and professionals who need to make decisions, not collect headlines.",
    cta: { label: "Request Talent", href: "/employers/request-talent" },
    topics: [
      "Employment trends",
      "Workforce planning",
      "Recruitment practices",
      "Employee retention",
      "Operational workforce challenges",
    ],
    image: reusedPageImages.workforceInsights,
  },
  {
    id: "reports",
    slug: "industry-reports",
    href: "/resources/industry-reports",
    name: "Industry Reports",
    description:
      "Research and analysis on hiring conditions, labor trends, and workforce challenges across manufacturing, warehousing and distribution, logistics, administrative support, customer service, and light industrial operations.",
    audience: "Employers",
    index: "07.2",
    headline: "Research That Supports Smarter Workforce Decisions",
    lede: "Industry-focused analysis of hiring conditions and labor trends across the six sectors we staff — so planning can rest on the work, not on generic commentary.",
    cta: {
      label: "Discuss Your Workforce Needs",
      href: "/contact/schedule-consultation",
    },
    topics: [
      "Manufacturing hiring conditions",
      "Warehouse and distribution labor trends",
      "Logistics workforce challenges",
      "Administrative and customer service demand",
      "Light industrial staffing patterns",
    ],
    image: reusedPageImages.industryReports,
  },
  {
    id: "employer",
    slug: "employer-resources",
    href: "/resources/employer-resources",
    name: "Employer Resources",
    description:
      "Practical tools, guides, and recommendations to help employers improve recruitment, onboarding, retention, workforce planning, and employee management.",
    audience: "Employers",
    index: "07.3",
    headline: "Practical Resources for Building Stronger Teams",
    lede: "Guides for the moments that actually change a workforce: recruiting well, onboarding with care, retaining people, and planning ahead of the next peak.",
    cta: {
      label: "Explore Employer Solutions",
      href: "/employers",
    },
    topics: [
      "Recruitment",
      "Onboarding",
      "Retention",
      "Workforce planning",
      "Employee management",
    ],
    image: reusedPageImages.employerGuides,
  },
  {
    id: "career",
    slug: "career-advice",
    href: "/resources/career-advice",
    name: "Career Advice",
    description:
      "Career guidance designed to help job seekers strengthen their résumés, prepare for interviews, succeed in the workplace, and make informed career decisions.",
    audience: "Job Seekers",
    index: "07.4",
    headline: "Resources to Help You Move Forward With Confidence",
    lede: "Straightforward guidance for résumés, interviews, first days, and the choices that shape a career — not a collection of empty motivational copy.",
    cta: { label: "Search Jobs", href: "/jobs" },
    topics: [
      "Résumé writing",
      "Interview preparation",
      "Workplace success",
      "Career planning",
      "Understanding temp-to-hire",
    ],
    image: reusedPageImages.careerAdvice,
  },
  {
    id: "news",
    slug: "company-news",
    href: "/resources/company-news",
    name: "Company News",
    description:
      "Updates from Platinum Staffing & Recruitment, including service announcements, new opportunities, company milestones, community engagement, and organizational developments.",
    audience: "Both",
    index: "07.5",
    headline: "The Latest From Platinum Staffing & Recruitment",
    lede: "Service announcements, opportunities, and organizational updates — published here as they are confirmed, never invented to fill the page.",
    cta: { label: "Contact Our Team", href: "/contact" },
    topics: [
      "Service announcements",
      "New opportunities",
      "Company milestones",
      "Community engagement",
      "Organizational developments",
    ],
    image: pageImages.companyNews,
  },
];

export function getResourceCategory(
  slug: string,
): ResourceCategory | undefined {
  return resourceCategories.find((category) => category.slug === slug);
}
