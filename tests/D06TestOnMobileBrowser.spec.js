import {test} from "@playwright/test"

test("Test for mobile test", async ({page}) => {
    await page.goto("https://www.flipkart.com/");

    await page.waitForTimeout(2000);
})