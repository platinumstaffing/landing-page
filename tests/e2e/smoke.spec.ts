import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/employers",
  "/employers/temporary-staffing",
  "/employers/temp-to-hire",
  "/employers/direct-hire",
  "/employers/seasonal-staffing",
  "/employers/high-volume-staffing",
  "/employers/workforce-planning",
  "/industries",
  "/industries/manufacturing",
  "/industries/warehouse-distribution",
  "/industries/logistics",
  "/industries/administrative-support",
  "/industries/customer-service",
  "/industries/light-industrial",
  "/job-seekers",
  "/jobs",
  "/resources",
  "/contact",
  "/accessibility",
  "/privacy",
  "/terms",
];

for (const route of routes) {
  test(`${route} renders without browser errors`, async ({ page }) => {
    const browserErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") browserErrors.push(message.text());
    });
    page.on("pageerror", (error) => browserErrors.push(error.message));

    const response = await page.goto(route, { waitUntil: "networkidle" });

    expect(response?.ok()).toBe(true);
    await expect(page.locator("main#main")).toBeVisible();
    await expect(page).toHaveTitle(/Platinum Staffing/i);
    expect(browserErrors).toEqual([]);
  });
}

test("site metadata endpoints expose canonical site URLs", async ({
  request,
}) => {
  const sitemap = await request.get("/sitemap.xml");
  const robots = await request.get("/robots.txt");

  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("<urlset");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap:");
});

test("security headers are present", async ({ request }) => {
  const response = await request.get("/");

  expect(response.headers()["content-security-policy"]).toContain(
    "frame-ancestors 'none'",
  );
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  expect(response.headers()["referrer-policy"]).toBe(
    "strict-origin-when-cross-origin",
  );
  expect(response.headers()["permissions-policy"]).toContain("camera=()");
  expect(response.headers()["x-powered-by"]).toBeUndefined();
});

test("contact validation prevents an empty submission", async ({ page }) => {
  const mutationRequests: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") mutationRequests.push(request.url());
  });

  await page.goto("/contact");
  await page.getByRole("button", { name: "Send Message" }).click();

  await expect(page.getByRole("alert").first()).toBeVisible();
  await expect(page.getByText("First name is required")).toBeVisible();
  expect(mutationRequests).toEqual([]);
});

test("employer validation does not send an empty inquiry", async ({ page }) => {
  const mutationRequests: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") mutationRequests.push(request.url());
  });

  await page.goto("/contact#request-talent");
  await page.getByRole("button", { name: "Submit Employer Inquiry" }).click();

  await expect(page.getByText("Company name is required")).toBeVisible();
  await expect(page.locator("#industry-error")).toHaveText(
    "Select an industry",
  );
  expect(mutationRequests).toEqual([]);
});

test("résumé validation does not upload or submit empty data", async ({
  page,
}) => {
  const mutationRequests: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") mutationRequests.push(request.url());
  });

  await page.goto("/job-seekers#submit-resume");
  await page.getByRole("button", { name: "Join Our Talent Network" }).click();

  await expect(page.getByText("First name is required")).toBeVisible();
  await expect(
    page.getByText("Please confirm we may contact you"),
  ).toBeVisible();
  expect(mutationRequests).toEqual([]);
});

test("keyboard users can reveal and use the skip link", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

for (const width of [320, 390, 768, 1280, 1920]) {
  test(`homepage has no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}
