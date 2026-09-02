import {test, expect} from "@playwright/test"
import testData from "./TestData/CRM_LoginData.json";

for(let d of testData){
    test("Data driven testing using JSON " + d.id, async({page})=>{
            await page.goto("https://automationplayground.com/crm/");
            await page.getByText("Sign In").click();
    
            await page.locator('#email-id').fill(d.userName);
            await page.locator('#password').fill(d.password);
            await page.locator('#submit-id').click();
    
            await expect(page).toHaveURL(/customer/);
    
            await page.waitForTimeout(2000);
    });
}
