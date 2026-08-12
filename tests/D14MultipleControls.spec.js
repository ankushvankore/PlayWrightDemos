import {test} from "@playwright/test"

test("Handling multiple controls", async ({page})=>{
    await page.goto("https://www.flipkart.com/");

    //Find all links on page
    let allLinks = await page.locator("a[href]").all();
    console.log("Total Links: " + allLinks.length);

    for(let l of allLinks){
        console.log(await l.innerText() + " -> " + await l.getAttribute("href"));        
    }

    //Find all images on page
    let totalImages = (await page.locator("img[alt]").allInnerTexts()).length;
    console.log("Total Images: " + totalImages);
    
})