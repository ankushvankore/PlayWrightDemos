import {test} from "@playwright/test"

test("CssSelector Single control using index", async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    //Reading single element using index
    let link = await page.locator("aside>div>a:nth-child(2)");
    await link.highlight();

    console.log("2nd Link: " + await link.innerText());

    await page.waitForTimeout(2000);
})