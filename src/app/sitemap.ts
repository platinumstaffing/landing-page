import type { MetadataRoute } from "next";

import { aboutPages } from "@/content/about";
import { industries } from "@/content/industries";
import { jobSeekerPages } from "@/content/job-seekers";
import { resourceCategories } from "@/content/resources";
import { siteConfig } from "@/content/site";
import { solutions } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/employers",
    "/employers/request-talent",
    "/industries",
    "/job-seekers",
    "/jobs",
    "/resources",
    "/contact",
    "/contact/schedule-consultation",
    "/contact/office-information",
    "/accessibility",
  ];

  const aboutRoutes = aboutPages.map((page) => page.href);
  const jobSeekerRoutes = jobSeekerPages.map((page) => page.href);
  const resourceRoutes = resourceCategories.map((category) => category.href);
  const solutionRoutes = solutions.map((solution) => solution.href);
  const industryRoutes = industries.map((industry) => industry.href);

  return [
    ...staticRoutes,
    ...aboutRoutes,
    ...jobSeekerRoutes,
    ...resourceRoutes,
    ...solutionRoutes,
    ...industryRoutes,
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/jobs" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/employers/") ||
            route.startsWith("/industries/") ||
            route.startsWith("/about/") ||
            route.startsWith("/job-seekers/") ||
            route.startsWith("/resources/") ||
            route.startsWith("/contact/")
          ? 0.65
          : 0.7,
  }));
}
