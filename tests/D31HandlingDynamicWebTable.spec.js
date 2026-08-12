import {test} from "@playwright/test"
import { log } from "node:console";

test("Test dynamic Web Table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.locator("//h2[text()='Dynamic Web Table']").scrollIntoViewIfNeeded();

    console.log(("--------- Capture all headings --------"));
    let allHeaders = await page.locator("//table[@id='taskTable']//thead//tr//th").allInnerTexts();
    console.log("Total no of Columns: " + allHeaders.length);

    for(let h of allHeaders){
        console.log(h);        
    }
    
    console.log("----------- Get the data for Chrome -----------");
    //first try to identify column no for Name column
    let colNo = 1;
    for(let h of allHeaders){
        if(h.includes("Name")){
            console.log("Column No: " + colNo);
            break;
        }
        colNo++;
    }

    //Data from specific column
    let column = await page.locator("//table[@id='taskTable']//tbody//tr//td["+colNo+"]").allInnerTexts();

    let rowNo = 1;
    for(let c of column){
        if(c.includes("Chrome")){
            break;
        }
        rowNo++;
        //console.log(c);        
    }
    console.log("Row Index for Chrome: " + rowNo);
    
    //get the specific row
    let chromeRow = await page.locator("//table[@id='taskTable']//tbody//tr["+rowNo+"]//td").allInnerTexts();

    for(let c of chromeRow){
        console.log(c);        
    }

    let hdNo = 1;
    for(let h of allHeaders){
        if(h.includes("CPU")){
            break;
        }
        hdNo++;
    }

    console.log("Row No: " + rowNo + " Column No: " + hdNo);
    let actValue = await page.locator("//*[@id='rows']//tr["+colNo+"]//td["+hdNo+"]").innerText();
    console.log("Value: " + actValue);
    
    let expValue = await page.locator("(//div[@id='displayValues']//p//strong)[1]").innerText();
    console.log(expValue);
     
    if(expValue === actValue){
        console.log("Value matches");
    }
    else{
        console.log("Value doesn't match");        
    }

    await page.waitForTimeout(5000);
})

//9-1.17