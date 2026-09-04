import type { ImageAsset } from "@/content/image-asset";
import { pageImages } from "@/content/page-images";

export type HomeImageAsset = ImageAsset & {
  id:
    | "hero"
    | "employer-partnership"
    | "staffing-models"
    | "manufacturing"
    | "warehouse-distribution"
    | "logistics"
    | "administrative-support"
    | "customer-service"
    | "light-industrial"
    | "candidate-pathway"
    | "employer-resource"
    | "career-resource";
  aspectRatio: "16:10" | "4:5" | "4:3" | "3:2";
};

export const homeImages = {
  hero: {
    id: "hero",
    src: "/brand/home/hero.webp",
    alt: "Operations leaders and workers meeting on an active manufacturing floor.",
    label: "Active manufacturing floor",
    aspectRatio: "16:10",
    width: 2624,
    height: 1632,
    focalPoint: "68% 50%",
  },
  employerPartnership: {
    id: "employer-partnership",
    src: "/brand/home/employer-partnership.webp",
    alt: "An operations supervisor and staffing partner reviewing work on a facility floor.",
    label: "Partnership on the floor",
    aspectRatio: "4:5",
    width: 1600,
    height: 2000,
    focalPoint: "center",
  },
  staffingModels: {
    id: "staffing-models",
    src: "/brand/home/staffing-models.webp",
    alt: "A staffing strategist mapping workforce requirements with an operations leader.",
    label: "A workforce model built to fit",
    aspectRatio: "4:3",
    width: 1800,
    height: 1350,
    focalPoint: "center",
  },
  manufacturing: {
    id: "manufacturing",
    src: "/brand/home/manufacturing.webp",
    alt: "A skilled operator inspecting work on a production line.",
    label: "Manufacturing",
    aspectRatio: "4:3",
    width: 1800,
    height: 1350,
    focalPoint: "65% 50%",
  },
  warehouseDistribution: {
    id: "warehouse-distribution",
    src: "/brand/home/warehouse-distribution.webp",
    alt: "A worker handling inventory in an active distribution environment.",
    label: "Warehouse and distribution",
    aspectRatio: "4:3",
    width: 2400,
    height: 1792,
    focalPoint: "center",
  },
  logistics: {
    id: "logistics",
    src: "/brand/home/logistics.webp",
    alt: "A logistics professional coordinating work around outbound freight.",
    label: "Logistics",
    aspectRatio: "4:3",
    width: 2400,
    height: 1792,
    focalPoint: "35% 50%",
  },
  administrativeSupport: {
    id: "administrative-support",
    src: "/brand/home/administrative-support.webp",
    alt: "An administrative professional coordinating an operations schedule.",
    label: "Administrative support",
    aspectRatio: "4:3",
    width: 2400,
    height: 1792,
    focalPoint: "65% 50%",
  },
  customerService: {
    id: "customer-service",
    src: "/brand/home/customer-service.webp",
    alt: "A customer service professional supporting a caller in an operations office.",
    label: "Customer service",
    aspectRatio: "4:3",
    width: 2400,
    height: 1792,
    focalPoint: "center",
  },
  lightIndustrial: {
    id: "light-industrial",
    src: pageImages.lightIndustrialProcess.src,
    alt: pageImages.lightIndustrialProcess.alt,
    label: pageImages.lightIndustrialProcess.label,
    aspectRatio: "4:3",
    width: pageImages.lightIndustrialProcess.width,
    height: pageImages.lightIndustrialProcess.height,
    focalPoint: pageImages.lightIndustrialProcess.focalPoint,
  },
  candidatePathway: {
    id: "candidate-pathway",
    src: "/brand/home/candidate-pathway.webp",
    alt: "A professional welcoming a worker as other candidates arrive behind them.",
    label: "A supported career journey",
    aspectRatio: "3:2",
    width: 2100,
    height: 1400,
    focalPoint: "35% 50%",
  },
  employerResource: {
    id: "employer-resource",
    src: "/brand/home/employer-resource.webp",
    alt: "A hiring manager reviewing workforce plans and operational documents.",
    label: "Workforce planning",
    aspectRatio: "3:2",
    width: 2528,
    height: 1696,
    focalPoint: "center",
  },
  careerResource: {
    id: "career-resource",
    src: "/brand/home/career-resource.webp",
    alt: "A job seeker preparing application materials with support from a recruiter.",
    label: "Career preparation",
    aspectRatio: "3:2",
    width: 1800,
    height: 1200,
    focalPoint: "65% 50%",
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
