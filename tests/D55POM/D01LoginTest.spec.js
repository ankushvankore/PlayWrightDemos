import {expect, test} from "@playwright/test"
import { LoginPage } from "../D54Pages/LoginPage.js"
import { exitCode } from "node:process";

test("Test for Title", async({page})=>{
    let l1 = new LoginPage(page);

    await l1.openApplication();
    let title = await l1.getTitle();

    expect(title).toContain("Orange");

    await page.waitForTimeout(2000);
})

test("Test login with valid credtionals", async({page})=>{
    let l1 = new LoginPage(page);

    await l1.openApplication();
    await l1.enterUserName("admin");
    await l1.enterPassword("admin123");
    await l1.clickOnLoginButton();

    await expect(page).toHaveURL(/dashboard/);

    await page.waitForTimeout(2000);
})

test.only("Test login with invalid credtionals", async({page})=>{
    let l1 = new LoginPage(page);

    await l1.openApplication();
    await l1.login("admin", "admin");

    //let msg = await page.locator("//p[text()='Invalid credentials']").innerText();
    let msg = await l1.getWarningMessage();
    await expect(msg).toContain("Invalid credentials");

    console.log("Title: " + await l1.getTitle());

    
    await page.waitForTimeout(2000);
})

//16 - 2.46