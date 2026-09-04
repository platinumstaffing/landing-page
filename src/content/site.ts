export const siteConfig = {
  name: "Platinum Staffing & Recruitment",
  shortName: "Platinum Staffing",
  tagline: "Workforce Solutions That Keep Your Business Moving.",
  description:
    "Since 2019, Platinum Staffing & Recruitment has partnered with employers to solve workforce challenges through dependable staffing and recruitment solutions.",
  founded: 2019,
  region: "the tri-state region",
  regionLabel: "Tri-State Region",
  areaServed: ["Pennsylvania", "New Jersey", "New York"] as const,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.CONTACT_TO_EMAIL ?? "",
  phone: "",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
    display: "Tri-state region — Pennsylvania, New Jersey, and New York",
  },
  hours: {
    weekdays: "Monday – Friday",
    weekend: "By appointment",
    note: "Business hours will be published once confirmed.",
  },
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
