import {chromium, test} from "@playwright/test"

test ("Test for Google Chrome", async ()=>{
    let b1 = await chromium.launch({headless:false, channel:"chrome"});
    let c1 = await b1.newContext();
    let p1 = await c1.newPage();

    await p1.goto("https://www.amazon.in");
    console.log("Title: " + await p1.title());
    console.log("URL: " + p1.url());
    
    await p1.waitForTimeout(2000);
})