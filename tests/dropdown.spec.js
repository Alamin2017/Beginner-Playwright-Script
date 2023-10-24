import { test, expect, chromium } from '@playwright/test';
import { Console } from 'console';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

test('Handle Dropdown Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#country').selectOption({label:'India'});
  await page.locator('#country').selectOption({value:'uk'});
  const options=await page.$$('#country option')
  await expect(options.length).toBe(10)
  for(const option of options){
    console.log(await option.textContent())
  }
  await delay(5000);
  await page.waitForTimeout(5000);
});
test.only('Handle Dropdown Test 2', async ({ page }) => {
    await page.goto('https://www.redbus.in/');
    await page.locator('//*[@id="src"]').fill("Delhi")
    await page.waitForSelector('//*[@id="homeV2-root"]/div[1]/div[2]/div/div[1]/div/div[1]/ul/li')
    const countrylist=await page.$$('//*[@id="homeV2-root"]/div[1]/div[2]/div/div[1]/div/div[1]/ul/li');
    for(let options of countrylist){
        console.log(await options.textContent()) 
    }
    await delay(5000);
  });
