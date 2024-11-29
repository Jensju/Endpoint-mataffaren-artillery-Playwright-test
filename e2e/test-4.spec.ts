import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Färdigmat' }).click();
  await page.getByRole('link', { name: 'Portionsrätter & snabblagat' }).click();
  await page.getByRole('heading', { name: 'Tomatsoppa Mild' }).click();
});