import { test, expect, chromium } from '@playwright/test';
import{loginpage} from '../pageobject/loginpage';


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
test('POM  Test', async ({ page }) => {
   const login=new loginpage(page)
   login.goTo()
   login.validLogin("anshika@gmail.com","Iamking@000")
  await delay(5000)
});