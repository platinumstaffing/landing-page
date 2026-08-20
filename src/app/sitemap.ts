import type { MetadataRoute } from "next";

import { industries } from "@/content/industries";
import { siteConfig } from "@/content/site";
import { solutions } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/employers",
    "/industries",
    "/job-seekers",
    "/jobs",
    "/resources",
    "/contact",
    "/accessibility",
  ];

  const solutionRoutes = solutions.map((solution) => solution.href);
  const industryRoutes = industries.map((industry) => industry.href);

  return [...staticRoutes, ...solutionRoutes, ...industryRoutes].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: route === "" || route === "/jobs" ? "weekly" : "monthly",
      priority:
        route === ""
          ? 1
          : route.startsWith("/employers/") || route.startsWith("/industries/")
            ? 0.65
            : 0.7,
    }),
  );
}
