import { test, expect, chromium } from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


test('Locate Multiple Elements', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');
  await page.waitForSelector('//*[@id="tbodyid"]//h4//a');
  const products=await page.$$('//*[@id="tbodyid"]//h4//a');

  for (const product of products){
    const ptext=await product.textContent();
    console.log(ptext);
  }
});
