import {expect, test} from "@playwright/test"

test("XPath Operators and Index", async({page})=>{
    page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")

    //XPath with and operator
    await page.locator("//input[@name='firstname' and @placeholder='First Name']").fill("Tanmay");
    await page.locator("//input[@name='lastname' or @id='input-lastname']").fill("Joshi");

    //XPath with Indexing
    await page.locator("(//input[@class='form-control'])[3]").fill("tanmayjoshi@gmail.com");

    //XPath with position() method
    await page.locator("(//input[@class='form-control'])[position()=4]").fill("8754211245");
    await page.locator("(//input[@class='form-control'])[position()=5]").fill("tanmay@123");
    await page.locator("(//input[@class='form-control'])[position()=6]").fill("tanmay@123");

    //Yes Radio button
    //await page.locator("(//input[@type='radio'])[position()=2]").click();
    //first(), last() and nth() method from playwright
    //for nth() index starts with 0
    await page.locator("(//input[@type='radio'])").nth(1).click();

    //Checkbox
    await page.locator("//input[@type='checkbox']").check();

    await page.locator("//input[@value='Continue']").click();

    //Check for message
    let message = await page.locator("//h1").last().innerText();
    //await expect(message).toContain("Your Account Has Been Created!");
    //OR
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/success");

    await page.waitForTimeout(2000);
})