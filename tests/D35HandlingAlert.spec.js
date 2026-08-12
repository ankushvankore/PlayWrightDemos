import {test} from "@playwright/test"

test("Alert handling", async ({page})=>{
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    await page.getByRole("button", {name:"Log In"}).click();

    await page.waitForTimeout(5000);
})

test.only("Manual Trigger for Alert handling", async ({page})=>{
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    page.on("dialog", (alertBox)=>{
        console.log("Type of Alert: " + alertBox.type());
        console.log("Message on Alert: " + alertBox.message());
        
        alertBox.accept();
    })

    await page.getByRole("button", {name:"Log In"}).click();

    await page.waitForTimeout(5000);
})

//10 - 2.08