import {test as base} from "@playwright/test"

export const test = base.extend({
    crmLogin: async({page}, use)=>{
        console.log("Before fixture executed...");
        
        await page.locator("#email-id").fill("test@gmail.com");
        await page.locator("#password").fill("test@123");
        await page.locator("#submit-id").click();

        await use(page);

        console.log("After fixture executed...");
    }
})