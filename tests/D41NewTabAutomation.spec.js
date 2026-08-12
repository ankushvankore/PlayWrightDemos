import {test} from "@playwright/test"

test("New tab automation", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log("Title: " + await page.title());
    
    

    let [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[contains(@href, 'twitter')]").click(),
    ])
    console.log("Title: " + await newTab.title())

    page.waitForTimeout(2000);

    await page.bringToFront();
    await page.getByPlaceholder("Username").fill('admin');

    let [linkedPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//a[contains(@href, 'link')]").click()
    ])

    console.log("Title: " + await linkedPage.title());
    await page.bringToFront();
    page.getByPlaceholder("Password").fill('1234');
    

    await page.waitForTimeout(2000);
})
//12-30