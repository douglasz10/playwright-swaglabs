import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    reporter: [['html', { outputFolder: 'report' }], ['list']],
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    use: {
        headless: false,
        trace: 'on-first-retry',
        screenshot: 'on',
        video: 'on'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'],
            viewport: { width: 1366, height: 768 } },
            
        },
        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
    ],
};
export default config;