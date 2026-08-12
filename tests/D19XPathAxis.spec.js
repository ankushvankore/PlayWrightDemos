import {test} from "@playwright/test"

test("Understanding XPath Axis", async ({page})=>{
    await page.goto("https://automationplayground.com/crm/customers.html?email-name=trial%40gmail.com&password-name=trial&submit-name=");

    //Highlight ancestor node for John element
    await page.locator("//td[text()='John']//ancestor::tbody").highlight();
    await page.waitForTimeout(2000);

    //Highlight parent node for John element
    await page.locator("//td[text()='John']//parent::tr").highlight();
    await page.waitForTimeout(2000);

    //Get all childs of row no 4
    let allTd = await page.locator("//tr[4]//child::td").allInnerTexts();
    console.log("Total Cells: " + allTd.length);
    for(let a of allTd){
        console.log(a);
    }

    //Highlight all rows after John's row
    await page.locator("//td[contains(text(),'Jo')]//following::tr").highlight();

    await page.waitForTimeout(2000);

    //Highlight all rows before John's row
    await page.locator("//td[contains(text(),'Jo')]//preceding::tr").highlight();

    await page.waitForTimeout(2000);

    //Highlight following sibling of John
    await page.locator("//td[text()='John']//following-sibling::td").highlight();
    await page.waitForTimeout(2000);
})