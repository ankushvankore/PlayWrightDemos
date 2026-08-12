import {test} from "@playwright/test"

test("XPath methods", async({page})=>{
    await page.goto("https://www.echotrak.com/Login.aspx?ReturnUrl=%2f");

    //text() method will check the visible text on the control
    await page.locator("//h4[text()='EchoTrak sign-in']").highlight();

    //normalize-space() method will ignore spaces before and after test. This method is like text() only difference it
    //this method will ignore white spaces befor and after
    let link = await page.locator("//a[normalize-space()='Need Login Assistance?']");
    await link.highlight();
    console.log(await link.innerText());

    //contains() will check the partial value of attribute
    await page.locator("//input[contains(@id, 'Customer')]").fill("Shraddha");

    await page.waitForTimeout(3000);

    //5-1.50
})