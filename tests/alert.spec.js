import {test, expect} from '@playwright/test'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

test.describe('Example to demonstrate handling of JavaScript Alert, Confirm, Prompt in Playwright',() => {
    test.beforeEach(async ({page}) => {
      await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
      await delay(3000)
    })
    test('Handling JS Alert - Validate Alert Text and Click OK', async ({page,}) => {
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('I am a JS Alert')
        await dialog.accept()
      })
      await page.locator('text=Click for JS Alert').click()
      await expect(page.locator('#result')).toHaveText(
        'You successfully clicked an alert'
      )
      await delay(3000)
    })
    test('Handling JS Confirm - Validate Confirm Text and Click OK', async ({page,}) => {
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('I am a JS Confirm')
        await dialog.accept()
      })
      await page.locator('text=Click for JS Confirm').click()
      await expect(page.locator('#result')).toHaveText('You clicked: Ok')
      await delay(3000)
    })
    test('Handling JS Confirm - Validate Confirm Text and Click Cancel', async ({page,}) => {
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('I am a JS Confirm')
        await dialog.dismiss()
      })
      await page.locator('text=Click for JS Confirm').click()
      await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
      await delay(3000)
    })
    test('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', async ({page,}) => {
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('I am a JS prompt')
        await dialog.accept('Testersdock')
      })
      await page.locator('text=Click for JS Prompt').click()
      await expect(page.locator('#result')).toHaveText(
        'You entered: Testersdock'
      )
      await delay(3000)
    })
  }
)