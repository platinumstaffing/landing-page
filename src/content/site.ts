export const siteConfig = {
  name: "Platinum Staffing & Recruitment",
  shortName: "Platinum Staffing",
  tagline: "Workforce Solutions That Keep Your Business Moving.",
  description:
    "Since 2019, Platinum Staffing & Recruitment has partnered with employers to solve workforce challenges through dependable staffing and recruitment solutions.",
  founded: 2019,
  region: "Pennsylvania",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.CONTACT_TO_EMAIL ?? "",
  phone: "",
  address: {
    street: "",
    city: "",
    state: "PA",
    zip: "",
    display: "Pennsylvania",
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
