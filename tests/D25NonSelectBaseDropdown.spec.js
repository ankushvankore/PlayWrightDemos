import {test} from "@playwright/test"

test("Handling non select based dropdown box", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");

    let drpBox = page.locator("(//div[@class='css-1wy0on6'])[1]");
    await drpBox.scrollIntoViewIfNeeded();

    await drpBox.click();
    await page.locator("//div[text()='Uttar Pradesh']").click();

    await page.waitForTimeout(2000);
})