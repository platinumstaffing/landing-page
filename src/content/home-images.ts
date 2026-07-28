export type HomeImageAsset = {
  id:
    | "hero"
    | "employer-partnership"
    | "manufacturing"
    | "warehouse-distribution"
    | "logistics"
    | "administrative-support"
    | "customer-service"
    | "light-industrial"
    | "candidate-pathway"
    | "employer-resource"
    | "career-resource";
  src: string;
  alt: string;
  label: string;
  aspectRatio: "16:10" | "4:5" | "4:3" | "3:2";
  width: number;
  height: number;
  focalPoint: string;
};

export const homeImages = {
  hero: {
    id: "hero",
    src: "/brand/home/hero.svg",
    alt: "Planned documentary photograph of an active Pennsylvania manufacturing floor.",
    label: "Active manufacturing floor",
    aspectRatio: "16:10",
    width: 1600,
    height: 1000,
    focalPoint: "center",
  },
  employerPartnership: {
    id: "employer-partnership",
    src: "/brand/home/employer-partnership.svg",
    alt: "Planned photograph of an operations supervisor and staffing partner reviewing a production schedule.",
    label: "Partnership on the floor",
    aspectRatio: "4:5",
    width: 1200,
    height: 1500,
    focalPoint: "center",
  },
  manufacturing: {
    id: "manufacturing",
    src: "/brand/home/manufacturing.svg",
    alt: "Planned photograph of a skilled operator inspecting a production line.",
    label: "Manufacturing",
    aspectRatio: "4:3",
    width: 1200,
    height: 900,
    focalPoint: "center",
  },
  warehouseDistribution: {
    id: "warehouse-distribution",
    src: "/brand/home/warehouse-distribution.svg",
    alt: "Planned photograph of a worker scanning inventory in an active distribution aisle.",
    label: "Warehouse and distribution",
    aspectRatio: "4:3",
    width: 1200,
    height: 900,
    focalPoint: "center",
  },
  logistics: {
    id: "logistics",
    src: "/brand/home/logistics.svg",
    alt: "Planned photograph of daylight loading-dock coordination.",
    label: "Logistics",
    aspectRatio: "4:3",
    width: 1200,
    height: 900,
    focalPoint: "center",
  },
  administrativeSupport: {
    id: "administrative-support",
    src: "/brand/home/administrative-support.svg",
    alt: "Planned photograph of an administrative professional coordinating an operations schedule.",
    label: "Administrative support",
    aspectRatio: "4:3",
    width: 1200,
    height: 900,
    focalPoint: "center",
  },
  customerService: {
    id: "customer-service",
    src: "/brand/home/customer-service.svg",
    alt: "Planned photograph of a customer service professional handling a call.",
    label: "Customer service",
    aspectRatio: "4:3",
    width: 1200,
    height: 900,
    focalPoint: "center",
  },
  lightIndustrial: {
    id: "light-industrial",
    src: "/brand/home/light-industrial.svg",
    alt: "Planned photograph of a team member performing careful assembly work.",
    label: "Light industrial",
    aspectRatio: "4:3",
    width: 1200,
    height: 900,
    focalPoint: "center",
  },
  candidatePathway: {
    id: "candidate-pathway",
    src: "/brand/home/candidate-pathway.svg",
    alt: "Planned photograph of a worker arriving confidently for a shift with a supervisor.",
    label: "A supported career journey",
    aspectRatio: "3:2",
    width: 1500,
    height: 1000,
    focalPoint: "center",
  },
  employerResource: {
    id: "employer-resource",
    src: "/brand/home/employer-resource.svg",
    alt: "Planned photograph of a hiring manager reviewing workforce plans.",
    label: "Workforce planning",
    aspectRatio: "3:2",
    width: 1500,
    height: 1000,
    focalPoint: "center",
  },
  careerResource: {
    id: "career-resource",
    src: "/brand/home/career-resource.svg",
    alt: "Planned photograph of a job seeker preparing application materials with a recruiter.",
    label: "Career preparation",
    aspectRatio: "3:2",
    width: 1500,
    height: 1000,
    focalPoint: "center",
  },
} satisfies Record<string, HomeImageAsset>;

export const industryHomeImages: Record<string, HomeImageAsset> = {
  manufacturing: homeImages.manufacturing,
  "warehouse-distribution": homeImages.warehouseDistribution,
  logistics: homeImages.logistics,
  "administrative-support": homeImages.administrativeSupport,
  "customer-service": homeImages.customerService,
  "light-industrial": homeImages.lightIndustrial,
};
