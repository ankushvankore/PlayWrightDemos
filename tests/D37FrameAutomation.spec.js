import {test} from "@playwright/test"

test("Frame automation", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    let frame1 = page.frameLocator("//frame[@src='frame_1.html']");
    await frame1.locator("//input[@name='mytext1']").fill("Test");

    await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']").fill("Frame2");

    let frame2 = await page.frameLocator("//frame[@src='frame_3.html']");
    frame2.locator("//input[@name='mytext3']").fill("Frame 3");

    let frame3 = await frame2.frameLocator("//iframe[contains(@src, 'https://docs.google.com/')]");
    frame3.locator("#i9").click();

    await page.waitForTimeout(3000);
})
//11-1.10