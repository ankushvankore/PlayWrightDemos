import {expect, test} from "@playwright/test"
import { link } from "node:fs";

test("Built in locators - Locate By Role", async ({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    //getByRole locator
    //await page.getByRole("link", {name: "Sign In"}).click();

    let link = await page.getByRole("link", {name:"Sign In"});
    console.log("Is link visible: " + await link.isVisible());
    await link.click();
    
    await page.waitForTimeout(2000);
})

test("Built in locators - Locate By Text", async ({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    //getByRole locator
    //await page.getByRole("link", {name: "Sign In"}).click();

    let link = await page.getByText("Sign In");
    console.log("Is link visible: " + await link.isVisible());
    await link.click();

    let pageUrl = page.url();
    await expect(page).toHaveURL(/login/);
    
    await page.waitForTimeout(2000);
})

test("Built in locators - Locate By Placeholder", async ({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    //getByRole locator
    //await page.getByRole("link", {name: "Sign In"}).click();

    let link = await page.getByText("Sign In");
    console.log("Is link visible: " + await link.isVisible());
    await link.click();

    let pageUrl = page.url();
    await expect(page).toHaveURL(/login/);

    await page.getByPlaceholder("Enter email").fill("test@gmail.com");
    await page.getByPlaceholder("Password").fill("test123");
    
    await page.waitForTimeout(2000);
})

test("Built in locators - Locate By Label", async ({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    //getByRole locator
    //await page.getByRole("link", {name: "Sign In"}).click();

    let link = await page.getByText("Sign In");
    console.log("Is link visible: " + await link.isVisible());
    await link.click();

    let pageUrl = page.url();
    await expect(page).toHaveURL(/login/);

    await page.getByPlaceholder("Enter email").fill("test@gmail.com");
    await page.getByPlaceholder("Password").fill("test123");

    await page.getByLabel("Remember me").click();
    
    await page.getByRole("button", {name:"Submit"}).click();

    await page.waitForTimeout(2000);
})

test("Built in locators - Locate By alt text", async ({page})=>{
    await page.goto("https://www.echotrak.com/Login.aspx?ReturnUrl=%2f");

    await page.getByAltText("EchoTrak").highlight();

    await page.waitForTimeout(2000);
})

test("Built in locators - Locate By data test id", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.getByTestId("username").fill("test@gmail.com");

    await page.waitForTimeout(2000);
})

test("Built in locators - Locate By title", async ({page})=>{
    await page.goto("https://www.google.com/");

    //await page.getByTitle("Search").fill("Sara Ali Khan");
    await page.getByTitle("Search").pressSequentially("Sara Ali Khan", {delay: 10});
    //await page.getByTitle("Search").press("Enter");

    await page.waitForTimeout(3000);
})

test.only("Built in locators - getText ", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    let t = await page.getByRole("link", {name: "Data Entry Form"}).innerText();
    console.log(t);
    

    await page.waitForTimeout(2000);
})