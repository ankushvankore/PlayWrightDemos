import {test} from "@playwright/test"

test("Test for mobile test", async ({page}) => {
    await page.goto("https://www.flipkart.com/");

    await page.waitForTimeout(2000);
})

//uncomment this part from playwright.config.js

/* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },