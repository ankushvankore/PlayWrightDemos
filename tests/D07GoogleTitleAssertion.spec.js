import {expect, test} from "@playwright/test"

test("Test for Google Title Assertion", async({page})=>{
    await page.goto("https://www.google.com");
    let title = await page.title();

    console.log("Title: " + title);
    await expect(page).toHaveTitle("Google");
    //OR
    await expect(title).toEqual("Google");
    await expect(page).toHaveURL("https://www.google.com");

    await page.waitForTimeout(2000);
})