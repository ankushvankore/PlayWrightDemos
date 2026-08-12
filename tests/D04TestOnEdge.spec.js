import {chromium, test} from "@playwright/test"

test("Test on Edge", async ({})=>{

    let browser = await chromium.launch({headless:false, channel:"msedge"});
    //let p1 = await browser.newPage();
    let c1 = await browser.newContext();
    let p1 = await c1.newPage();
    await p1.goto("https://www.google.com");
})