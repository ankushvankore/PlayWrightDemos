import {test} from "@playwright/test"

test("Automate hidden elements", async ({page})=>{
    await page.goto("https://www.letskodeit.com/practice");

    //Click on hide button 
    await page.locator("#hide-textbox").click();

    //await page.locator("#show-hide").fill("Hello All...");
    await page.evaluate(()=>{
        document.querySelector("#displayed-text").value="Hello All";
    })
    await page.locator("#show-textbox").click();

    await page.waitForTimeout(2000);

})