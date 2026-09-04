import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/about/our-story",
  "/employers",
  "/employers/temporary-staffing",
  "/employers/request-talent",
  "/industries/manufacturing",
  "/job-seekers",
  "/job-seekers/submit-resume",
  "/jobs",
  "/resources/workforce-insights",
  "/contact",
  "/contact/schedule-consultation",
];

for (const route of routes) {
  test(`${route} has no automatically detectable WCAG A/AA violations`, async ({
    page,
  }) => {
    await page.goto(route, { waitUntil: "networkidle" });

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
