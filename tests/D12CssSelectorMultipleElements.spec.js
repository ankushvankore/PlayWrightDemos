import {test} from "@playwright/test"

test("CssSelector multiple controls", async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    //let links = await page.locator("aside>div>a").all();
    let links = await page.locator("aside a").all();
    console.log("Total Elements: " + links.length);
    
    for(let l of links){
        console.log(await l.innerText() + " -> " + await l.getAttribute("href"));
    }

    //Reading single element using index
    console.log("2nd Element: " + await page.locator("aside>div>a:nth-child(2)").innerText());
})