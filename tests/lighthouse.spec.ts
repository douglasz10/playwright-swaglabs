import { test } from '@playwright/test'

const { playAudit } = require('playwright-lighthouse');
const playwright = require('playwright');


test('open browser', async () => {
    const browser = await playwright['chromium'].launch({
        args: ['--remote-debugging-port=9222'],
    });
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/');

    const config = { extends: 'lighthouse:default', settings: { formFactor: 'desktop', screenEmulation: { mobile: false } } }
    const thresholds = {
        performance: 70,
        accessibility: 70,
        'best-practices': 70,
        seo: 70,
        pwa: 70,
    }

    await playAudit({
        page: page,
        config,
        thresholds,
        port: 9222,
        reports: {
            formats: {
                json: true,
                html: true, 
                csv: true
            },
            name: 'lighthouse-report',
            directory: './report'
        },
    });

    await browser.close();
});
