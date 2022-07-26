import { injectAxe, checkA11y, configureAxe} from 'axe-playwright'
import { chromium } from 'playwright'
import { test } from '@playwright/test'


test('checks a11y', async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
    await injectAxe(page)
    await configureAxe(page)
    await checkA11y(page, {
        detailedReport: true,
        detailedReportOptions: { html: true },
    })
})

