import {test} from "@playwright/test"

test("Authentaction popup handling", async ({page})=>{
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    //Here you need to add the credtionals to the url after https:// and @
    //This will work only if you are having plain string user name and password 
    //but if username and password contains some numbers or special characters then
    //you need to use browser context
    //See the next test case
    await page.waitForTimeout(2000);
})

test.only("Authentaction popup handling special characters", async ({browser})=>{
    let context = await browser.newContext({httpCredentials:{
        username:"admin",
        password:"admin123**"
    }});
    let page = await context.newPage();
    //This will not work for this website because this site expects admin & admin as 
    //user name and password
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    
    await page.waitForTimeout(2000);
})