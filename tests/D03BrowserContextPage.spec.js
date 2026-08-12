import {test} from "@playwright/test"

test ("Test for browser fixture", async ({browser})=>{
    let c1 = await browser.newContext();
    let p1 = await c1.newPage();

    await p1.goto("https://www.google.com");

    let p2 = await c1.newPage();
    await p2.goto("https://restful-api.dev/");
})

test("Browser Fixture with another way", async({browser})=>{
    let p1 = await browser.newPage();
    await p1.goto("https://chatgpt.com/");
})

test("Test for context fixture", async ({context})=>{
    let p1 = await context.newPage();
    await p1.goto("https://www.google.com");
})

test.only("Page Fixture", async ({page})=>{
    await page.goto("https://www.amazon.in");
    await page.waitForTimeout(2000);
})
