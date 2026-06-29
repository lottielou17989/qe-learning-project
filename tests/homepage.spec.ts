import { test, expect } from '@playwright/test';


test('Homepage has the correct title', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
});