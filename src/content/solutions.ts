export type Solution = {
  slug: string;
  name: string;
  summary: string;
  href: string;
};

export const solutions: Solution[] = [
  {
    slug: "temporary-staffing",
    name: "Temporary Staffing",
    summary:
      "Reliable professionals ready to support short-term staffing needs.",
    href: "/employers#temporary-staffing",
  },
  {
    slug: "temp-to-hire",
    name: "Temp-to-Hire",
    summary: "Evaluate employees before making a permanent hiring decision.",
    href: "/employers#temp-to-hire",
  },
  {
    slug: "direct-hire",
    name: "Direct Hire",
    summary:
      "Connect with highly qualified candidates for permanent positions.",
    href: "/employers#direct-hire",
  },
  {
    slug: "seasonal-staffing",
    name: "Seasonal Staffing",
    summary: "Scale your workforce during peak business seasons.",
    href: "/employers#seasonal-staffing",
  },
  {
    slug: "high-volume-staffing",
    name: "High-Volume Staffing",
    summary:
      "Efficient recruitment solutions for organizations hiring multiple employees.",
    href: "/employers#high-volume-staffing",
  },
  {
    slug: "workforce-planning",
    name: "Workforce Planning",
    summary:
      "Strategic staffing solutions that help employers prepare for future workforce demands.",
    href: "/employers#workforce-planning",
  },
];

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
