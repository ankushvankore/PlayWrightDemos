import {expect, test} from "@playwright/test"

/*
Autowaits
1. Page level waits
2. Event level waits
3. Element level wait
*/

test("Autowaits in playwright", async({page})=>{
    //If require you can add test level or page level time out as well
    //Explain this at the end
    //test.setTimeout(30000);
    //page.setDefaultTimeout(20000);

    await page.goto("https://automationplayground.com/crm/login.html");

    //let mailid = page.locator("#email-id");
    //mailid.fill("test@gmail.com");

    //let mailid = page.locator("#email-id123");
    //mailid.fill("test@gmail.com");

    let mailid = page.locator("#email-id");
    mailid.waitFor({timeout:5000})
    await mailid.fill("test@gmail.com");

    await page.locator("#password").fill("test");
    await page.locator("#submit-id").click();

    //await page.waitForURL(/customer/);      //Autowait for 30 seconds by default
    //await expect(page).toHaveURL(/customer/);

    //await page.waitForURL(/products/);      //Autowait for 30 seconds by default
    //await expect(page).toHaveURL(/customer/);
    await page.waitForURL(/products/, {timeout:2000})

    await page.waitForTimeout(2000);

    
})