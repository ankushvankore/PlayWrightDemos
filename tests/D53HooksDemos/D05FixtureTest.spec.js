import {test} from "../D54Fixtures/Auth.fixture.js"

test.beforeEach("Before login", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");
    await page.locator("#SignIn").click();

})
test("Test for login", async({crmLogin})=>{
    let page = crmLogin;
    await page.waitForTimeout(2000);
})

//16-1.46