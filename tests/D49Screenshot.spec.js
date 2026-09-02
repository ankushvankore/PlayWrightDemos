import {test} from "@playwright/test"

test("Test for screenshot", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.screenshot({path: "./Screenshot/AutomationSS.jpeg"});

    //Full page screenshot
    await page.screenshot({path: "./Screenshot/Automation2.jpeg", fullPage:true});

    //Screenshot of specific element
    //This will scroll to that element by default
    await page.locator("#productTable").screenshot({path: './Screenshot/Table.jpeg'});

    await page.locator("#sunday").screenshot({path: './Screenshot/SundayCB.jpeg'});

    await page.waitForTimeout(2000);
})

//14-1.04