import { test, expect, chromium } from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
test('Locate built in Elements', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder("Username").fill("Admin")
  await page.getByPlaceholder("Password").fill("admin123")
  await page.getByRole('button',{type:'submit'}).click()
  const name=await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p').textContent()
  await expect(await page.getByText(name)).toBeVisible()
  await delay(5000)
});
test.only('Mouse Hover Actions', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  const desktop=await page.locator('//*[@id="narbar-menu"]/ul/li[1]/a')
  const mac=await page.locator('//*[@id="narbar-menu"]/ul/li[1]/div/div/ul/li[2]/a');
  await desktop.hover();
  await mac.hover()
  await mac.click()
  await delay(5000)
});