import { test, expect } from '@playwright/test';

test('homepage links to author page', async ({ page }) => {
  await page.goto('https://kzadurska.github.io/expecto-frontendum/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Expecto Frontendum/);

  // create a locator
  const author = page.locator('text=Kasia Zadurska');

  // Expect an attribute "to be strictly equal" to the value.
  // await expect(author).toHaveAttribute('href', '/authors/kasia-zadurska');

  // Click the get started link.
  await author.click();

  // Expects the URL to contain .
  await expect(page).toHaveURL(/.*authors/);
});

