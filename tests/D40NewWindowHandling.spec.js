import {test} from "@playwright/test"

test("Handling new window", async({page})=>{
    await page.goto("https://www.naukri.com/");

    let [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        //Click on Remote button
        page.locator("//span[contains(text(), 'Rem')]").click()
    ])    
    await page.waitForTimeout(3000);
    console.log("Title: " + await newTab.title());
    await newTab.locator("//*[@id='search-result-container']/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/label/i").click();
    await newTab.close();

    await page.locator("//*[text()='Login']").click();

    await page.waitForTimeout(5000);
})

//12