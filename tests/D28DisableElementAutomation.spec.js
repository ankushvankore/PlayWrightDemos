import {test} from "@playwright/test"

test("Automate disable elements", async ({page})=>{
    await page.goto("https://formy-project.herokuapp.com/enabled");

    let textBox = page.getByPlaceholder("Disabled input here...");
    console.log("Enable : " + await textBox.isEnabled());
    console.log("Disable: " + await textBox.isDisabled());
    
    await page.evaluate(()=>{
        document.querySelector("#disabledInput").value="Hello All";
    })

    await page.waitForTimeout(2000);
})