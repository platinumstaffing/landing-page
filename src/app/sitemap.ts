import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    "",
    "/employers",
    "/industries",
    "/job-seekers",
    "/jobs",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/jobs" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
