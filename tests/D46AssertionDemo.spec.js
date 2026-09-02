import {test, expect} from "@playwright/test"

/*
Assertion: is the way of validation
Types: 
1. Hard Assertion - will stop the execution
2. Soft Assertion - will continue the execution
*/

test("Test for hard assertion", async({page})=>{
    await page.goto("https://jqueryui.com/slider/");

    await expect(page).toHaveTitle("Slider | jQuery UI");
    console.log("Page title match!!! TC Pass!!!");
    
    //Partial match
    await expect(page).toHaveTitle(/Slider/);
    console.log("Partial title match!!! TC Pass!!!");
    
    //Url
    await expect(page).toHaveURL("https://jqueryui.com/slider/");
    console.log("URL Match!!! TC Pass!!!");
    
    //Partial URL
    await expect(page).toHaveURL(/jqueryui/)
    console.log("Partial URL Match!!! TC Pass!!!");
    
    //Element Assertion
    let inputBox = page.locator("//input[@name='s']");
    
    await expect(inputBox).toBeVisible();
    await expect(inputBox).toBeEnabled();
    await expect(inputBox).toBeEditable();

    if(inputBox.isVisible() && inputBox.isEnabled() && inputBox.isEnabled){
        //Action
        inputBox.fill("Searching something");
    }

    await expect(inputBox).toHaveValue("Searching something");
    
    //Assert on attribute
    await expect(inputBox).toHaveAttribute('type', 'search');

    //Assert on cssvalue
    //for css value on DevTool go to Compound
    await expect(inputBox).toHaveCSS('text-align','start');

    //Assertion for no of links under widget tab
    let allLinks = page.locator("//*[@id='sidebar']/aside[2]/ul/li/a");
    await expect(allLinks).toHaveCount(14);

    //OR

    let allLinks1 = await page.locator("//*[@id='sidebar']/aside[2]/ul/li/a").all();
    await expect(allLinks1).toHaveLength(14);

    let header = page.locator("//h1[text()='Slider']");
    await expect(header).toHaveText("Slider");

    await page.waitForTimeout(2000);
})

test("Assertion for checkbox", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    //Select the checkbox
    let sunday = page.locator("#sunday");
    await sunday.scrollIntoViewIfNeeded();
    await sunday.click();

    await expect(sunday).toBeChecked();

    let monday = page.locator("#monday");
    await expect(monday).not.toBeChecked();

    await page.waitForTimeout(2000);
})

test.only("Test for soft assertion", async({page})=>{
    await page.goto("https://jqueryui.com/slider/");

    await expect.soft(page).toHaveTitle("Slider | jQuery UI");
    console.log("Page title match!!! TC Pass!!!");
    
    //Partial match
    await expect.soft(page).toHaveTitle(/Slider/);
    console.log("Partial title match!!! TC Pass!!!");
    
    //Url
    await expect.soft(page).toHaveURL("https://jqueryui.com/slider/");
    console.log("URL Match!!! TC Pass!!!");

    //Screenshot
    await expect(page).toHaveScreenshot();

    /*
    First time screenshot will be captured and will be stored and test will fail
    second time just run it, it will again capture the screenshot and compair with 
    previous one then test case will pass
    */

    await page.waitForTimeout(2000);
})

//13-2.08