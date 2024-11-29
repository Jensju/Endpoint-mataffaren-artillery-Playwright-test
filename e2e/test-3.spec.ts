import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.locator('div').filter({ hasText: /^Bröd & Kakor\+$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Kondis & fika' }).click();
  await page.getByRole('heading', { name: 'Kanelsnäcka Kanelbulle' }).click();
});