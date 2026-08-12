import {test} from "@playwright/test"

test ("Handling pagination table 2nd demo", async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");

    await page.locator("//div[@id='tablepress-1_info']").scrollIntoViewIfNeeded();

    //find the element with text Ukraine

    let pageNo = 1;
    while(true){
        let controlExists = await page.locator("//td[text()='Ukraine']").isVisible();
        if(controlExists){
            console.log("Control found on page no: " + pageNo);
            //If found click on the check box
            await page.locator("//td[text()='Ukraine']//preceding-sibling::td[4]/input").check();
            break;
        }
        else{
            //Click on next page button
            await page.locator("//button[@aria-label='Next']").click();
        }
        pageNo++;
    }

    await page.waitForTimeout(2000);
})