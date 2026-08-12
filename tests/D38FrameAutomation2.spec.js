import {test} from "@playwright/test"

test("Handling nested frames2", async ({page})=>{
    await page.goto("https://selectorshub.com/iframe-scenario/");

    //frame1-->1st textbox
    let frame1 = page.frameLocator("(//iframe[@id='pact1'])[1]");
    await frame1.locator("#inp_val").fill("Selenium WebDriver");

    //frame1-->frame2--> 2nd textbox
    let frame2 = frame1.frameLocator("(//iframe[@src='https://selectorshub.com/input-box/'])[1]");
    await frame2.locator("#jex").fill("Playwright");

    //frame1-->frame2-->frame3-->3rd textbox
    await frame2.frameLocator("#pact3").locator("#glaf").fill("Sara Ali Khan");

    await page.waitForTimeout(2000);
})