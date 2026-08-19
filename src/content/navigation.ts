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
      { label: "Our Story", href: "/about#story" },
      { label: "Mission, Vision & Values", href: "/about#values" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Why Platinum", href: "/about#why-platinum" },
      { label: "Careers at Platinum", href: "/about#careers" },
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
      { label: "Request Talent", href: "/contact#request-talent" },
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
      { label: "Submit Your Résumé", href: "/job-seekers#submit-resume" },
      { label: "Application Process", href: "/job-seekers#process" },
      { label: "Contact Us", href: "/contact" },
      { label: "Frequently Asked Questions", href: "/job-seekers#faq" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Workforce Insights", href: "/resources#insights" },
      { label: "Industry Reports", href: "/resources#reports" },
      { label: "Employer Resources", href: "/resources#employer" },
      { label: "Career Advice", href: "/resources#career" },
      { label: "Company News", href: "/resources#news" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerNav = {
  employers: [
    { label: "Employer Solutions", href: "/employers" },
    { label: "Industries", href: "/industries" },
    { label: "Request Talent", href: "/contact#request-talent" },
  ],
  jobSeekers: [
    { label: "Search Jobs", href: "/jobs" },
    { label: "Submit Résumé", href: "/job-seekers#submit-resume" },
    { label: "Career Center", href: "/job-seekers" },
    { label: "Frequently Asked Questions", href: "/job-seekers#faq" },
  ],
  company: [
    { label: "About Platinum", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Accessibility Statement", href: "/accessibility" },
  ],
} as const;
