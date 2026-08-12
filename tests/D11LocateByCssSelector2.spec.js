import {test} from "@playwright/test"

test("Understanding CssSelector 2", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    
    //CssSelector Starts with
    await page.locator("input[placeholder^='User']").fill("standard_user");
    //CssSelector Ends with
    await page.locator("input[placeholder$='word']").fill("trial");
    //CssSelector contains
    await page.locator("input[class*='button']").click();

    console.log(await page.locator("h3[data-test='error']").innerText());
    

    await page.waitForTimeout(2000);
})