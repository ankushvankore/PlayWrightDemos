import {test} from "@playwright/test";
import { log } from "node:console";

/*
Fixtures in Playwright (Environment details)
---------------------
1. browser: Will create instance of original browser (Chromium)
2. browser context: For multiple browsers (like multiple user on multiple tabs or browser)
3. page: for single tab / browser. Isolated Page instance, created for each test
4. request: for API testing
*/

test("Google Test", async({page})=>{
    await page.goto("https://www.google.com");
    let pageTitle = await page.title();
    console.log("Title: " + pageTitle);
    
    let pageUrl = page.url();
    console.log("URL: " + pageUrl);    

    await page.waitForTimeout(2000);
})