// playwright.conf.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

    timeout: 120_000,

    expect: {
        timeout: 115_000,
    },

    testDir: './tests',

    retries: 0,

    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['json', { outputFile: 'test-results.json' }],
        ['junit', { outputFile: 'results.xml' }],
        ['allure-playwright'],
    ],

    use: {
        headless: true,

        viewport: { width: 1600, height: 1400 },

        recordVideo: {
            dir: 'videos',
            size: { width: 1600, height: 1400 },
        },

        screenshot: 'only-on-failure',

        trace: 'on',

        video: 'on',

        launchOptions: {
            devtools: false,
            // args: ['--start-maximized'],
        },
    },

    /*
    here we use projects per browser) :Firefox → real Firefox engine, Chromium → Chrome and Edge, WebKit → Safari
    
    */

    projects: [
        {
            name: 'FF',
            use: { browserName: 'firefox' },
        },
        {
            name: 'chrome',
            use: { browserName: 'chromium' },
        },
        {
            name: 'edge',
            use: { browserName: 'chromium' },
        },
        {
            name: 'safari',
            use: { browserName: 'webkit' },
        },
        {
            name: 'Mobile Safari - iPhone 13',
            use: {
                ...devices['iPhone 13'],
            },
        },
        {
            name: 'Mobile Chrome - Pixel 5',
            use: {
                ...devices['Pixel 5'],
            },
        },
    ],
});


///===============

/*
Examples:

$env:ENVIRONMENT="DEF"; npx playwright test api --project=FF
$env:ENVIRONMENT="DEF"; npx playwright test --headed -g "scenario 123" --project=chrome


userAgent is not a replacement for browser projects.

Use it only when:

- The app behaves differently based on UA string
- You need to simulate mobile vs desktop
- You are bypassing bot detection
- Backend logic checks UA headers

You need to reproduce a prod issue tied to UA
*/