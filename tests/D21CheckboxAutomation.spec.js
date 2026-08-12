import {test, expect} from "@playwright/test"

test("Checkbox Automation", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    /*
    first(), last(), nth() method
    first checkbox should be unchecked
    second checkbox should be checked
    */

    let ch1 = page.locator("//input[@type='checkbox']").first();
    let ch2 = page.locator("//input[@type='checkbox']").last();

    await expect(ch1).not.toBeChecked();
    await ch1.click();

    await expect(ch2).toBeChecked();
    await ch2.uncheck();
    

    await page.waitForTimeout(2000);
})