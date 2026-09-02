import {test} from "@playwright/test"

test.describe.serial("Real Scenario", async ()=>{
    
    test.beforeEach("Open application", async ({page})=>{
        await page.goto("https://automationplayground.com/crm/");

        await page.locator("#SignIn").click();
    })

    test("Login to Application", async({page})=>{
        await page.locator("#email-id").fill("test@gmail.com");
        await page.locator("#password").fill("test@123");
        await page.locator("#submit-id").click();
    })

    test("Logout from application", async({page})=>{
        await page.locator("#email-id").fill("test@gmail.com");
        await page.locator("#password").fill("test@123");
        await page.locator("#submit-id").click();

        await page.locator(".nav-link").click();

        await page.waitForTimeout(2000);
    })
})