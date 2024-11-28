import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4000/kategori/frukt-och-gront');
  await page.getByRole('heading', { name: 'Sötpotatis Klass' }).click();
  await page.getByRole('heading', { name: 'Ruccola Ekologisk Klass' }).click();
});