export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      {
        label: "Mission, Vision & Values",
        href: "/about/mission-vision-values",
      },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Why Platinum", href: "/about/why-platinum" },
      { label: "Careers at Platinum", href: "/about/careers" },
    ],
  },
  {
    label: "Employer Solutions",
    href: "/employers",
    children: [
      { label: "Workforce Solutions Overview", href: "/employers" },
      { label: "Temporary Staffing", href: "/employers/temporary-staffing" },
      { label: "Temp-to-Hire", href: "/employers/temp-to-hire" },
      { label: "Direct Hire", href: "/employers/direct-hire" },
      { label: "Seasonal Staffing", href: "/employers/seasonal-staffing" },
      {
        label: "High-Volume Staffing",
        href: "/employers/high-volume-staffing",
      },
      { label: "Workforce Planning", href: "/employers/workforce-planning" },
      { label: "Request Talent", href: "/employers/request-talent" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      {
        label: "Warehouse & Distribution",
        href: "/industries/warehouse-distribution",
      },
      { label: "Logistics", href: "/industries/logistics" },
      {
        label: "Administrative Support",
        href: "/industries/administrative-support",
      },
      { label: "Customer Service", href: "/industries/customer-service" },
      { label: "Light Industrial", href: "/industries/light-industrial" },
    ],
  },
  {
    label: "Job Seekers",
    href: "/job-seekers",
    children: [
      { label: "Career Center", href: "/job-seekers" },
      { label: "Search Jobs", href: "/jobs" },
      { label: "Submit Your Résumé", href: "/job-seekers/submit-resume" },
      {
        label: "Application Process",
        href: "/job-seekers/application-process",
      },
      { label: "Career Resources", href: "/job-seekers/career-resources" },
      { label: "Frequently Asked Questions", href: "/job-seekers/faq" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Workforce Insights", href: "/resources/workforce-insights" },
      { label: "Industry Reports", href: "/resources/industry-reports" },
      { label: "Employer Resources", href: "/resources/employer-resources" },
      { label: "Career Advice", href: "/resources/career-advice" },
      { label: "Company News", href: "/resources/company-news" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      {
        label: "Schedule a Consultation",
        href: "/contact/schedule-consultation",
      },
      { label: "Office Information", href: "/contact/office-information" },
    ],
  },
];

export const footerNav = {
  employers: [
    { label: "Employer Solutions", href: "/employers" },
    { label: "Industries", href: "/industries" },
    { label: "Request Talent", href: "/employers/request-talent" },
  ],
  jobSeekers: [
    { label: "Search Jobs", href: "/jobs" },
    { label: "Submit Résumé", href: "/job-seekers/submit-resume" },
    { label: "Career Center", href: "/job-seekers" },
    {
      label: "Frequently Asked Questions",
      href: "/job-seekers/faq",
    },
  ],
  company: [
    { label: "About Platinum", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Accessibility Statement", href: "/accessibility" },
  ],
} as const;
