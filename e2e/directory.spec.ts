import { test, expect } from "@playwright/test";

test("homepage loads and shows hero heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Good places to find startup work",
  );
  await expect(page.locator('[aria-live="polite"]')).toContainText("33 resources");
});

test("search filters cards by name", async ({ page }) => {
  await page.goto("/");
  const search = page.getByPlaceholder(/search/i);
  await search.fill("wellfound");
  await expect(page.getByRole("heading", { name: "Wellfound" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Y Combinator Jobs" })).not.toBeVisible();
  await search.clear();
  await expect(page.getByRole("heading", { name: "Y Combinator Jobs" })).toBeVisible();
});

test("section tabs switch visible categories", async ({ page }) => {
  await page.goto("/");
  const filterBar = page.locator('[aria-label="Filter by section"]');
  await filterBar.getByRole("button", { name: /freelance & ai/i }).click();
  await expect(page.getByRole("heading", { name: "Freelance, AI Tasks" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Y Combinator Jobs" })).not.toBeVisible();
  await filterBar.getByRole("button", { name: /startup jobs/i }).click();
  await expect(page.getByRole("heading", { name: "Startup Jobs & Discovery" })).toBeVisible();
});

test("tag chips filter results", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /paid research/i }).click();
  const cards = page.locator("a[href^='https://']");
  await expect(cards.first()).toBeVisible();
  const names = await page.getByRole("heading", { level: 3 }).allTextContents();
  expect(names.length).toBeGreaterThan(0);
  for (const n of names) {
    const card = page.locator("a", { has: page.getByRole("heading", { name: n, exact: true }) });
    await expect(card).toContainText("Paid research");
  }
  await page.getByRole("button", { name: /paid research/i }).click();
});

test("external card links open in new tab", async ({ page, context }) => {
  await page.goto("/");
  const card = page
    .locator("a", { has: page.getByRole("heading", { name: "Wellfound", exact: true }) })
    .first();
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    card.click(),
  ]);
  await newPage.waitForLoadState("domcontentloaded");
  await expect(newPage).toHaveURL(/wellfound\.com/);
  await newPage.close();
});

test("empty state appears for no matches and can be reset", async ({ page }) => {
  await page.goto("/");
  const search = page.getByPlaceholder(/search/i);
  await search.fill("zzzzzzz");
  await expect(page.getByText(/nothing matches/i)).toBeVisible();
  await page.getByRole("button", { name: /reset the directory/i }).click();
  await expect(page.getByText(/nothing matches/i)).not.toBeVisible();
  await expect(page.getByRole("heading", { name: "Y Combinator Jobs" })).toBeVisible();
});

test("mobile layout renders without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const body = page.locator("body");
  const scrollWidth = await body.evaluate((el) => el.scrollWidth);
  const clientWidth = await body.evaluate((el) => el.clientWidth);
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
