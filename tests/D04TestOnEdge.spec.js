import {chromium, test} from "@playwright/test"

test("Test on Edge", async ({})=>{

    let browser = await chromium.launch({headless:false, channel:"msedge"});
    //let p1 = await browser.newPage();
    let c1 = await browser.newContext();
    let p1 = await c1.newPage();
    await p1.goto("https://www.google.com");
})

/*
for execution only on msedge
write the code inside the test()
let browser = await chromium.launch({headed:false, channel: "msedge"})
this time just call
npx playwright test tests/Name of test.spec.js 
on the terminal

but before this comment the following code from playwrithg.config.js

 Configure projects for major browsers 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
 