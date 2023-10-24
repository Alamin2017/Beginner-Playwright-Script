import { test, expect, chromium } from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
test.beforeEach(async ({page})=>{
  await page.goto('https://www.demoblaze.com/')
})
test.afterEach(async({page})=>{
  await page.locator("//a[@id='logout2']").click()
  await page.close()
})
test('Home Page Test', async ({ page }) => {
  await page.locator("//a[@id='login2']").click()
  await page.locator("//input[@id='loginusername']").fill("pavanol")
  await page.locator("//input[@id='loginpassword']").fill("test@123")
  await page.locator("//button[normalize-space()='Log in']").click()
  const products=await page.$$(".hrefch")
  expect(products).toHaveLength(9)
});
test('Add Product to cart Test', async ({ page }) => {
  await page.locator("//a[@id='login2']").click()
  await page.locator("//input[@id='loginusername']").fill("pavanol")
  await page.locator("//input[@id='loginpassword']").fill("test@123")
  await page.locator("//button[normalize-space()='Log in']").click()
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
  await page.locator("//a[normalize-space()='Add to cart']").click()
  page.on('dialog',async dialog=>{
    await dialog.accept()
  })
});
