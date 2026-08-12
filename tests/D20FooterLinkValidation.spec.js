import {test} from "@playwright/test"

test("Footer link validation", async({page})=>{
    await page.goto("https://www.flipkart.com/")

    let allLinks = await page.locator("//footer//child::a").allInnerTexts();
    console.log("Total Links: " + allLinks.length);
    
    for(let l of allLinks){
        console.log(l);
    }

    await page.waitForTimeout(2000);
})