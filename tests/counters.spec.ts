import { test, expect } from "@playwright/test";

test.describe("Counters", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5174/");
  });

  test("elements rendered", async ({ page }) => {
    await expect(page.getByLabel("Start at")).toBeVisible();
    await expect(page.getByLabel("Step")).toBeVisible();
    await expect(page.getByRole("button", { name: "0" })).toBeVisible();
  });

  test("setup counter to start with 100 and increment by 10", async ({
    page,
  }) => {
    await page.getByLabel("Start at").fill("100");
    await page.getByLabel("Step").fill("10");

    await page.getByRole("button", { name: "100" }).click();
    await expect(page.getByRole("button", { name: "110" })).toBeVisible();

    await page.getByRole("button", { name: "110" }).click();
    await expect(page.getByRole("button", { name: "120" })).toBeVisible();
  });

  test("setup counter to start with 0 and increment by -1", async ({
    page,
  }) => {
    await page.getByLabel("Start at").fill("0");
    await page.getByLabel("Step").fill("-1");

    await page.getByRole("button", { name: "0" }).click();
    await expect(page.getByRole("button", { name: "-1" })).toBeVisible();

    await page.getByRole("button", { name: "-1" }).click();
    await expect(page.getByRole("button", { name: "-2" })).toBeVisible();
  });
});
