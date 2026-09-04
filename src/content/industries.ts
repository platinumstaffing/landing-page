import type { FaqItem } from "@/content/faqs";
import type { ImageAsset } from "@/content/image-asset";
import { pageImages } from "@/content/page-images";

export type IndustrySlug =
  | "manufacturing"
  | "warehouse-distribution"
  | "logistics"
  | "administrative-support"
  | "customer-service"
  | "light-industrial";

export type Industry = {
  slug: IndustrySlug;
  name: string;
  summary: string;
  href: string;
  headline: string;
  lede: string;
  ctaLabel: string;
  challengesTitle: string;
  challenges: string[];
  positions: string[];
  solutionsTitle: string;
  solutions: string[];
  faqs: FaqItem[];
  heroTone: "canvas" | "muted";
  image: ImageAsset;
  index: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Supporting production facilities with dependable professionals who keep operations running efficiently.",
    href: "/industries/manufacturing",
    headline: "Manufacturing talent that keeps production moving.",
    lede: "Manufacturing operations depend on reliable, skilled professionals who understand safety, productivity, and quality. Platinum Staffing partners with manufacturers to recruit dependable employees who help organizations meet production goals while reducing workforce shortages.",
    ctaLabel: "Request Manufacturing Talent",
    challengesTitle: "Manufacturing Challenges We Solve",
    challenges: [
      "High turnover",
      "Production deadlines",
      "Skilled labor shortages",
      "Peak production demand",
      "Shift coverage",
      "Safety-focused hiring",
    ],
    positions: [
      "Production Associates",
      "Assemblers",
      "Machine Operators",
      "Quality Inspectors",
      "Maintenance Technicians",
      "Forklift Operators",
      "Packaging Associates",
      "Shipping & Receiving",
      "Production Supervisors",
      "Inventory Specialists",
    ],
    solutionsTitle: "Hiring Solutions for Manufacturers",
    solutions: [
      "Temporary Staffing for production coverage",
      "Temp-to-Hire for evaluating floor talent",
      "Direct Hire for permanent manufacturing roles",
      "Seasonal Staffing for peak production periods",
      "High-Volume Staffing for expansion and multi-shift hiring",
    ],
    faqs: [
      {
        id: "mfg-roles",
        question: "What manufacturing roles do you recruit?",
        answer:
          "We recruit production associates, assemblers, machine operators, quality inspectors, maintenance technicians, forklift operators, packaging associates, shipping and receiving staff, supervisors, and inventory specialists.",
      },
      {
        id: "mfg-safety",
        question: "How do you approach safety-focused hiring?",
        answer:
          "We screen candidates against the requirements of each manufacturing environment and emphasize dependable work habits, safety awareness, and readiness to contribute on the floor.",
      },
      {
        id: "mfg-shifts",
        question: "Can you support multiple production shifts?",
        answer:
          "Yes. Manufacturing partners often need first, second, third, or rotating shift coverage, and we recruit against those schedules from the start.",
      },
      {
        id: "mfg-start",
        question: "How do we request manufacturing talent?",
        answer:
          "Use the Request Talent form and select Manufacturing as the industry, or start from this page so the staffing service and industry context are already identified.",
      },
    ],
    heroTone: "canvas",
    image: pageImages.manufacturingTeam,
    index: "03.1",
  },
  {
    slug: "warehouse-distribution",
    name: "Warehouse & Distribution",
    summary:
      "Helping warehouses and distribution centers maintain productivity through reliable staffing solutions.",
    href: "/industries/warehouse-distribution",
    headline:
      "Reliable warehouse professionals for high-performing operations.",
    lede: "Efficient warehouse and distribution operations depend on dependable employees who keep inventory moving accurately and safely. Platinum Staffing delivers workforce solutions that help organizations maintain productivity and meet customer expectations.",
    ctaLabel: "Request Warehouse Talent",
    challengesTitle: "Warehouse Challenges We Solve",
    challenges: [
      "Peak shipping volume",
      "Inventory accuracy pressure",
      "Shift coverage gaps",
      "Equipment-qualified hiring needs",
      "Order fulfillment timelines",
      "Seasonal distribution demand",
    ],
    positions: [
      "Warehouse Associates",
      "Pickers",
      "Packers",
      "Forklift Operators",
      "Inventory Specialists",
      "Shipping & Receiving",
      "Material Handlers",
      "Distribution Supervisors",
    ],
    solutionsTitle: "Hiring Solutions for Warehouses",
    solutions: [
      "Temporary Staffing for daily and surge coverage",
      "Seasonal Staffing for peak shipping seasons",
      "Temp-to-Hire for evaluating warehouse talent",
      "High-Volume Staffing for launches and expansions",
      "Direct Hire for permanent distribution roles",
    ],
    faqs: [
      {
        id: "wh-roles",
        question: "What warehouse roles do you recruit?",
        answer:
          "We commonly recruit warehouse associates, pickers, packers, forklift operators, inventory specialists, shipping and receiving staff, material handlers, and distribution supervisors.",
      },
      {
        id: "wh-equipment",
        question: "Can you recruit candidates with equipment experience?",
        answer:
          "Yes. Share the equipment requirements for the role and we will screen candidates accordingly before presentation or placement.",
      },
      {
        id: "wh-volume",
        question: "Can you support peak shipping periods?",
        answer:
          "Yes. Seasonal and high-volume staffing models are often used when warehouses need to scale quickly around peak demand.",
      },
      {
        id: "wh-request",
        question: "How do we request warehouse talent?",
        answer:
          "Use the Request Talent form from this page so Warehouse & Distribution is identified, then tell us the roles, shifts, and start dates you need.",
      },
    ],
    heroTone: "muted",
    image: pageImages.distributionFlow,
    index: "03.2",
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary:
      "Connecting logistics organizations with professionals who keep supply chains moving.",
    href: "/industries/logistics",
    headline: "Workforce solutions that keep supply chains moving.",
    lede: "Platinum Staffing supports logistics organizations by recruiting dependable professionals who help maintain efficient transportation, distribution, inventory, and supply chain operations.",
    ctaLabel: "Request Logistics Talent",
    challengesTitle: "Logistics Challenges We Solve",
    challenges: [
      "Coordination across moving operations",
      "Tight delivery and dispatch windows",
      "Inventory and shipping accuracy",
      "Coverage for transportation support roles",
      "Hiring for fast-changing volumes",
      "Need for reliable operations support",
    ],
    positions: [
      "Logistics Coordinators",
      "Dispatch Support",
      "Inventory Specialists",
      "Warehouse Associates",
      "Shipping Coordinators",
      "Transportation Support",
      "Operations Coordinators",
    ],
    solutionsTitle: "Hiring Solutions for Logistics",
    solutions: [
      "Temporary Staffing for operational coverage",
      "Temp-to-Hire for evaluating logistics talent",
      "Direct Hire for permanent coordinators and support roles",
      "Seasonal Staffing for peak shipping demand",
      "Workforce Planning for recurring logistics hiring needs",
    ],
    faqs: [
      {
        id: "log-roles",
        question: "What logistics roles do you recruit?",
        answer:
          "We recruit logistics coordinators, dispatch support, inventory specialists, warehouse associates, shipping coordinators, transportation support, and operations coordinators.",
      },
      {
        id: "log-timeline",
        question: "How quickly can logistics roles be filled?",
        answer:
          "Timelines depend on the role and requirements. After we understand the position and schedule, we begin recruiting and share a realistic hiring plan.",
      },
      {
        id: "log-temp",
        question: "Do you support temporary and permanent logistics hiring?",
        answer:
          "Yes. Logistics partners use temporary, temp-to-hire, seasonal, and direct-hire solutions depending on whether the need is coverage, evaluation, or permanent placement.",
      },
      {
        id: "log-request",
        question: "How do we request logistics talent?",
        answer:
          "Start from this page or use the Request Talent form and select Logistics so your inquiry is categorized correctly from the start.",
      },
    ],
    heroTone: "canvas",
    image: pageImages.logisticsCoordination,
    index: "03.3",
  },
  {
    slug: "administrative-support",
    name: "Administrative Support",
    summary:
      "Recruiting experienced office professionals who strengthen daily business operations.",
    href: "/industries/administrative-support",
    headline: "Administrative professionals who strengthen your business.",
    lede: "Our administrative staffing solutions connect organizations with professionals who keep offices organized, efficient, and productive while supporting daily business operations.",
    ctaLabel: "Request Administrative Talent",
    challengesTitle: "Administrative Challenges We Solve",
    challenges: [
      "Office coverage gaps",
      "Need for organized daily operations",
      "Front-desk and reception support",
      "Data entry and records accuracy",
      "Temporary coverage for absences or projects",
      "Finding dependable long-term office talent",
    ],
    positions: [
      "Administrative Assistants",
      "Executive Assistants",
      "Receptionists",
      "Office Coordinators",
      "Data Entry Specialists",
      "Human Resources Support",
      "Customer Service Representatives",
    ],
    solutionsTitle: "Hiring Solutions for Administrative Teams",
    solutions: [
      "Temporary Staffing for office coverage",
      "Temp-to-Hire for evaluating office talent",
      "Direct Hire for permanent administrative roles",
      "Seasonal Staffing for project-based office demand",
      "Workforce Planning for recurring administrative needs",
    ],
    faqs: [
      {
        id: "admin-roles",
        question: "What administrative roles do you recruit?",
        answer:
          "We recruit administrative assistants, executive assistants, receptionists, office coordinators, data entry specialists, human resources support, and related office professionals.",
      },
      {
        id: "admin-types",
        question: "Can you fill temporary and permanent office roles?",
        answer:
          "Yes. Administrative support can be temporary coverage, temp-to-hire evaluation, or permanent placement depending on the business need.",
      },
      {
        id: "admin-skills",
        question: "How do you match candidates to office environments?",
        answer:
          "We review the position requirements, schedule, and workplace expectations, then screen candidates for the skills and professionalism the role needs.",
      },
      {
        id: "admin-request",
        question: "How do we request administrative talent?",
        answer:
          "Use the Request Talent form from this page so Administrative Support is identified, then share the role, employment type, and start date.",
      },
    ],
    heroTone: "muted",
    image: pageImages.administrativeOperations,
    index: "03.4",
  },
  {
    slug: "customer-service",
    name: "Customer Service",
    summary:
      "Providing customer service professionals who create positive customer experiences.",
    href: "/industries/customer-service",
    headline: "Customer service professionals who represent your brand.",
    lede: "Great customer experiences begin with exceptional people. Platinum Staffing connects organizations with customer service professionals who communicate effectively, solve problems, and strengthen customer relationships.",
    ctaLabel: "Request Customer Service Talent",
    challengesTitle: "Customer Service Challenges We Solve",
    challenges: [
      "High call or inquiry volume",
      "Need for clear, professional communication",
      "Coverage across shifts or peak periods",
      "Front-desk and client support gaps",
      "Hiring for consistent customer representation",
      "Building dependable support teams quickly",
    ],
    positions: [
      "Customer Service Representatives",
      "Call Center Specialists",
      "Front Desk Professionals",
      "Client Support Specialists",
      "Inside Sales Support",
      "Service Coordinators",
    ],
    solutionsTitle: "Hiring Solutions for Customer Service",
    solutions: [
      "Temporary Staffing for coverage and volume spikes",
      "Temp-to-Hire for evaluating customer-facing talent",
      "Direct Hire for permanent service roles",
      "Seasonal Staffing for peak customer demand",
      "High-Volume Staffing when multiple service seats open at once",
    ],
    faqs: [
      {
        id: "cs-roles",
        question: "What customer service roles do you recruit?",
        answer:
          "We recruit customer service representatives, call center specialists, front desk professionals, client support specialists, inside sales support, and service coordinators.",
      },
      {
        id: "cs-experience",
        question: "Do candidates need prior customer service experience?",
        answer:
          "Requirements vary by role. Some positions need prior experience; others welcome strong communicators who are ready to learn your process and represent your brand well.",
      },
      {
        id: "cs-volume",
        question: "Can you support high-volume customer service hiring?",
        answer:
          "Yes. When multiple seats need to be filled quickly, we can structure a high-volume or seasonal recruitment approach around your timeline.",
      },
      {
        id: "cs-request",
        question: "How do we request customer service talent?",
        answer:
          "Start from this page or use the Request Talent form and select Customer Service so the inquiry is categorized correctly.",
      },
    ],
    heroTone: "canvas",
    image: pageImages.customerSupportTeam,
    index: "03.5",
  },
  {
    slug: "light-industrial",
    name: "Light Industrial",
    summary:
      "Delivering dependable staffing solutions for industrial and operational environments.",
    href: "/industries/light-industrial",
    headline: "Dependable workforce solutions for industrial operations.",
    lede: "Our light industrial staffing solutions help organizations maintain safe, productive, and efficient operations by connecting employers with dependable professionals who are ready to contribute from day one.",
    ctaLabel: "Request Light Industrial Talent",
    challengesTitle: "Light Industrial Challenges We Solve",
    challenges: [
      "General labor shortages",
      "Assembly and packaging coverage",
      "Material handling needs",
      "Shift and overtime pressure",
      "Safety-conscious hiring",
      "Scaling for production or project demand",
    ],
    positions: [
      "General Labor",
      "Production Associates",
      "Assemblers",
      "Packagers",
      "Machine Operators",
      "Material Handlers",
      "Forklift Operators",
      "Warehouse Support",
    ],
    solutionsTitle: "Hiring Solutions for Light Industrial",
    solutions: [
      "Temporary Staffing for immediate operational coverage",
      "Temp-to-Hire for evaluating industrial talent",
      "Seasonal Staffing for peak production periods",
      "High-Volume Staffing for multi-role hiring projects",
      "Direct Hire for permanent industrial roles",
    ],
    faqs: [
      {
        id: "li-roles",
        question: "What light industrial roles do you recruit?",
        answer:
          "We recruit general labor, production associates, assemblers, packagers, machine operators, material handlers, forklift operators, and warehouse support professionals.",
      },
      {
        id: "li-safety",
        question: "How do you approach safety in industrial hiring?",
        answer:
          "We screen candidates against the requirements of each work environment and prioritize candidates who are prepared to work safely and dependably on site.",
      },
      {
        id: "li-shifts",
        question: "Can you support multiple industrial shifts?",
        answer:
          "Yes. Light industrial partners often need coverage across multiple shifts, and we recruit against those schedules from the beginning.",
      },
      {
        id: "li-request",
        question: "How do we request light industrial talent?",
        answer:
          "Use the Request Talent form from this page so Light Industrial is identified, then share the positions, employee count, shifts, and start date.",
      },
    ],
    heroTone: "muted",
    image: pageImages.lightIndustrialProcess,
    index: "03.6",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
