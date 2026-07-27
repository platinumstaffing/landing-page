// Resource Center category directory. Approved category descriptions from the copy
// deck. No published articles exist yet (see docs/CONTENT_GAPS.md), so category
// pages are marked "in progress" rather than linking to non-existent content.

export type ResourceCategory = {
  id: string;
  name: string;
  description: string;
  audience: "Employers" | "Job Seekers" | "Both";
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: "insights",
    name: "Workforce Insights",
    description:
      "Articles and commentary exploring employment trends, workforce planning, recruitment practices, employee retention, and changes affecting employers and professionals.",
    audience: "Both",
  },
  {
    id: "reports",
    name: "Industry Reports",
    description:
      "Research and analysis on hiring conditions, labor trends, and workforce challenges across manufacturing, warehousing and distribution, logistics, administrative support, customer service, and light industrial operations.",
    audience: "Employers",
  },
  {
    id: "employer",
    name: "Employer Resources",
    description:
      "Practical tools, guides, and recommendations to help employers improve recruitment, onboarding, retention, workforce planning, and employee management.",
    audience: "Employers",
  },
  {
    id: "career",
    name: "Career Advice",
    description:
      "Career guidance designed to help job seekers strengthen their résumés, prepare for interviews, succeed in the workplace, and make informed career decisions.",
    audience: "Job Seekers",
  },
  {
    id: "news",
    name: "Company News",
    description:
      "Updates from Platinum Staffing & Recruitment, including service announcements, new opportunities, company milestones, community engagement, and organizational developments.",
    audience: "Both",
  },
];
