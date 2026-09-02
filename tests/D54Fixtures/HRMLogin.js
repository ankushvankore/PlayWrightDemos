import {test as base} from "@playwright/test"

export const test = base.extend({
    loginToOHRM: async({page}, use)=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await page.locator("//input[@name='username']").fill("admin");
        await page.locator("//input[@name='password']").fill("admin123");
        await page.locator(".oxd-button").click();

        use(page);
    }
})