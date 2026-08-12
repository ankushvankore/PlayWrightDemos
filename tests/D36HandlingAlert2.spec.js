import {test, expect} from "@playwright/test"
import { log } from "console";

test("Handling the alert of different types", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(alertBox)=>{
        console.log("Message on Alert: " + alertBox.message());
        
        await alertBox.accept();
    })

    await page.getByText("Click for JS Alert").click();
    let message = await page.locator("#result").innerText();
    console.log(message);
    
    await expect(message).toEqual("You successfully clicked an alert");

    await page.waitForTimeout(2000);
})

test("Handling the alert - Confirmation Alert", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(alertBox)=>{
        console.log("Message on Alert: " + alertBox.message());
        
        await alertBox.accept();
    })

    await page.getByText("Click for JS Confirm").click();
    let message = await page.locator("#result").innerText();
    console.log(message);
    
    await expect(message).toEqual("You clicked: Ok");

    await page.waitForTimeout(2000);
})

test("Handling the alert - Prompt Box", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(alertBox)=>{
        console.log("Alert type: " + alertBox.type());
        console.log("Message on Alert: " + alertBox.message());

        await alertBox.accept("Welcome to Playwright");
    })

    await page.locator("//button[text()='Click for JS Prompt']").click();

    let messageEle = await page.locator("#result");
    console.log("Message after alert: " + messageEle.innerHTML);
    
    await expect(messageEle).toHaveText("You entered: Welcome to Playwright");

    await page.waitForTimeout(2000);
})

test.only("Handle all alerts via Listner", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(alertBox)=>{
        if(alertBox.type().includes('alert')){
            console.log("Handling simple alert!!!");
            console.log("Alert says: " + alertBox.message());
            await alertBox.accept();
        }
        else if(alertBox.type().includes('confirm')){
            console.log("Handling confirm alert");
            console.log("Alert says: " + alertBox.message());
            await alertBox.dismiss();
        }
        else if(alertBox.type().includes('prompt')){
            console.log("Handling prompt alert");
            console.log("Alert says: " + alertBox.message());
            alertBox.accept("Welcome...");
        }
    })
    await page.getByText("Click for JS Alert").click();
    let m1 = page.locator("#result");
    await expect(m1).toHaveText("You successfully clicked an alert");

    await page.waitForTimeout(1000);

    await page.getByText("Click for JS Confirm").click();
    let m2 = page.locator("#result");
    await expect(m1).toHaveText("You clicked: Cancel");

    await page.waitForTimeout(1000);

    await page.getByText("Click for JS Prompt").click();
    let m3 = page.locator("#result")
    await expect(m1).toHaveText("You entered: Welcome...");

    await page.waitForTimeout(2000);
})


//11 -40.00