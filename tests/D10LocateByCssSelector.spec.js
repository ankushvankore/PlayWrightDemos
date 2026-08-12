import {test, expect} from "@playwright/test"

test("Understanding cssSelector", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    //Using cssSelector with Id technique 1
    await page.locator("input#name").fill("Shrivardhan Vankore");
    //Using cssSelector with id technique 2
    await page.locator("#email").fill("shri@gmail.com");
    //Using any attribute
    await page.locator("input[placeholder='Enter Phone']").fill("9890742718");
    await page.locator("textarea[class='form-control']").fill("Pattankodoli");
    await page.locator("#male").click();
    await page.locator("#monday").check();


    await page.waitForTimeout(2000);
})