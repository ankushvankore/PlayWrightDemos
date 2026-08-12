import {expect, test} from "@playwright/test"

test("understand XPath", async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();

    //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveURL(/inventory/);

    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.locator("//a[@id='logout_sidebar_link']").click();

    await page.waitForTimeout(2000);
})