import {test, expect} from "@playwright/test"



let testData = [
    {'id':"TC01", 'userName': 'test101@gmail.com', 'password': 'MyPassword'},
    {'id':"TC02", 'userName': 'test102@gmail.com', 'password': 'MyPassword'},
    {'id':"TC03", 'userName': 'test103@gmail.com', 'password': 'MyPassword'},
]

for(let d of testData){
    test("Data driven testing using Array " + d.id, async({page})=>{
        await page.goto("https://automationplayground.com/crm/");
        await page.getByText("Sign In").click();

        await page.locator('#email-id').fill(d.userName);
        await page.locator('#password').fill(d.password);
        await page.locator('#submit-id').click();

        await expect(page).toHaveURL(/customer/);

        await page.waitForTimeout(2000);
    });
}