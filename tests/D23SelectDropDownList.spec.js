import {test, expect} from "@playwright/test"

test("Select based drop down box", async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");

    let drp = page.locator("//select[@id='drop1']");

    //Select by value
    //drp.selectOption("jkl");

    //Select By Label / visible text
    //await drp.selectOption({label:"doc 1"});

    //Select by index
    await drp.selectOption({index: 2});

    //console.log("Selected Option: " + await drp.textContent());
    
    //Find total no of elements
    drp.click();
    let allOptions = await page.locator("//select[@id='drop1']//option").all();
    console.log("Total options: " + allOptions.length);
    for(let a of allOptions){
        console.log(await a.innerText());        
    }

    await page.waitForTimeout(2000);
})