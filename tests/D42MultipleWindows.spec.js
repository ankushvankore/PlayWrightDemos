import {test} from "@playwright/test"

test("Handling multiple windows/tabs", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let homePageTitle = await page.title();

    await page.locator("//a[contains(@href, 'linked')]").click();
    await page.locator("//a[contains(@href, 'facebook')]").click();
    await page.locator("//a[contains(@href, 'twitter')]").click();
    await page.locator("//a[contains(@href, 'youtube')]").click();

    await page.waitForTimeout(2000);
    let allPages = context.pages();
    //Will return total no of pages / tabs
    console.log("Total no of tabs: " + allPages.length);
    
    for(let ap of allPages){
        console.log(await ap.title());        

        if(await ap.title() !== homePageTitle){
            await page.waitForTimeout(1000);
            ap.close();
        }
    }

    await page.waitForTimeout(2000);
})

//12-38