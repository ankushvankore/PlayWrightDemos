import {test} from "@playwright/test"

test("Google search list automation", async ({page})=>{
    await page.goto("https://www.google.com")

    await page.locator("#APjFqb").fill("Shriyanka Patil");
    await page.waitForSelector("ul[jsname='bw4e9b'] li");

    let allOptions = await page.locator("ul[jsname='bw4e9b'] li").all();
    console.log("Total Options: " + allOptions.length);
    
    for(let o of allOptions){
        console.log(await o.innerText());
    }
    //4-1.19
})