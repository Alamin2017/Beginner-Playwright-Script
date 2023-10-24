import { test, expect, chromium } from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
test('Assertions Test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
  await expect(page).toHaveTitle("nopCommerce demo store. Register")
  const logoElement=await page.locator("//img[@alt='nopCommerce demo store']")
  await expect(logoElement).toBeVisible()
  const maleRadioButton=await page.locator("//input[@id='gender-male']")
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()
  await delay(5000)
});