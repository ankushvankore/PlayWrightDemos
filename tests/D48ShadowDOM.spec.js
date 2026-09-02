import {test} from "@playwright/test"

test("Test for Shodow DOM", async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");

    let userName = await page.locator("#kils");
    await userName.scrollIntoViewIfNeeded();

    await userName.fill("Hitashi");

    await page.waitForTimeout(2000);
})

test.only("Shadow DOM element inside the frame", async({page})=>{
    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");

    let frame = page.frameLocator("#pact1");
    frame.locator("#jex").fill("Shriyanka Patil");
})