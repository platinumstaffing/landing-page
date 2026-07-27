export type Industry = {
  slug: string;
  name: string;
  summary: string;
  href: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Supporting production facilities with dependable professionals who keep operations running efficiently.",
    href: "/industries#manufacturing",
  },
  {
    slug: "warehouse-distribution",
    name: "Warehouse & Distribution",
    summary:
      "Helping warehouses and distribution centers maintain productivity through reliable staffing solutions.",
    href: "/industries#warehouse-distribution",
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary:
      "Connecting logistics organizations with professionals who keep supply chains moving.",
    href: "/industries#logistics",
  },
  {
    slug: "administrative-support",
    name: "Administrative Support",
    summary:
      "Recruiting experienced office professionals who strengthen daily business operations.",
    href: "/industries#administrative-support",
  },
  {
    slug: "customer-service",
    name: "Customer Service",
    summary:
      "Providing customer service professionals who create positive customer experiences.",
    href: "/industries#customer-service",
  },
  {
    slug: "light-industrial",
    name: "Light Industrial",
    summary:
      "Delivering dependable staffing solutions for industrial and operational environments.",
    href: "/industries#light-industrial",
  },
];
