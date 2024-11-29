module.exports = { mytestFlow };

async function mytestFlow(page) {


  await page.goto('http://127.0.0.1:4000/');
  await page.getByRole('link', { name: 'Mejeri, ost & ägg' }).click();
  await page.getByRole('link', { name: 'Ost', exact: true }).click();
  await page.getByRole('link', { name: 'Färskost' }).click();

  await page.getByRole('link', { name: 'Färdigmat' }).click();
  await page.getByRole('link', { name: 'Portionsrätter & snabblagat' }).click();
  await page.getByRole('heading', { name: 'Tomatsoppa Mild' }).click();

  await page.locator('div').filter({ hasText: /^Bröd & Kakor\+$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Kondis & fika' }).click();
  await page.getByRole('heading', { name: 'Kanelsnäcka Kanelbulle' }).click();
}