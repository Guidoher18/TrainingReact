import { test, expect } from "@playwright/test";

const URL = "http://localhost:5173";

test("has title", async ({ page }) => {
  await page.goto(URL);

  const header = await page.locator("h1").textContent();
  console.log(header);
  expect(header).toBe("App de Gatitos");
});

// Test doesn't work! TODO: Review this!

// test("has image", async ({ page }) => {
//   await page.goto(URL);

//   const img = page.getByRole("img");
//   console.log(img);
//   await expect(img).toBeVisible();
// });

// test("has paragraph", async ({ page }) => {
//   await page.goto(URL);

//   const p = await page.locator("p:first-of-type").textContent();
//   console.log(p);
//   expect(p?.length).toBeGreaterThan(0);
// });

// test("has three words", async ({ page }) => {
//   await page.goto(URL);

//   const p = await page.locator("p").textContent();
//   console.log(p);
//   expect(p?.length).toBeGreaterThan(0);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
