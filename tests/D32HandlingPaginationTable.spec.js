import {test} from "@playwright/test"

test("Handling pagination table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.locator("//h2[contains(text(),'Pagi')]").scrollIntoViewIfNeeded();

    let allPages = await page.locator("//ul[@id='pagination']//li//a").all();
    console.log("Total pages: " + allPages.length);

    let totalRows = 0;
    for(let p of allPages){
        await p.click();
        await page.waitForTimeout(500);

        let rows = await page.locator("//table[@id='productTable']//tbody/tr").all();
        totalRows = totalRows + (await rows).length;

        /*let allCheckBoxes = await page.locator("//table[@id='productTable']//tbody//tr//td[4]//input").all();
        for(let c of allCheckBoxes){
            await c.click();
            await page.waitForTimeout(500);
        }*/
       //Check that whether 'Fitness Tracker' is present or not and check only that one checkbox
       let isExists = await page.locator("//table[@id='productTable']//tbody//tr//td[text()='Fitness Tracker']").isVisible();
       
       if(isExists){
        await page.locator("//table[@id='productTable']//tbody//tr//td[text()='Fitness Tracker']//following-sibling::td[2]//input").click();
       }
    }
    console.log("Total Rows: " + totalRows);
    

    await page.waitForTimeout(2000);
})

//10