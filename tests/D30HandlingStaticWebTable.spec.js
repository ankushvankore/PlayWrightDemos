import {test} from "@playwright/test"
import { log } from "node:console";

test("Automate Static Web Table", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    /*
    Scenarios
    Total rows
    Total columns
    Specific row
    Specific column
    All data
    */

    await page.locator("//h2[text()='Static Web Table']").scrollIntoViewIfNeeded();

    //Total no of rows
    let allRows = await page.locator("//table[@name='BookTable']//tr").all();
    console.log("Total Rows: " + allRows.length);
    
    //Total no columns
    let totalColumns = await page.locator("//table[@name='BookTable']//tr[1]//th").allInnerTexts();
    console.log("Total columns: " + totalColumns.length);

    console.log("All Columns Headers");
    for(let h of totalColumns){
        console.log(h);
        
    }

    //get single row
    let singleRow = await page.locator("//table[@name='BookTable']//tr[5]//td").allInnerTexts();
    console.log(singleRow);    
    //OR
    let singleRow1 = await page.locator("//table[@name='BookTable']//tr[5]");
    console.log(await singleRow1.textContent());
    
    //Get only book name
    console.log("-------------- All Book name -----------------");
    
    let bookName = await page.locator("//table[@name='BookTable']//tr//td[1]").allInnerTexts();
    console.log(bookName);

    //Calculate sum of all prices
    let totalPrice = 0;
    let price = await page.locator("//table[@name='BookTable']//tr//td[4]").allInnerTexts();
    for(let p of price){
        totalPrice = totalPrice + Number(p);
    }
    console.log("Total Price: " + totalPrice);

    console.log("----------- Find price of Master in Selenium -------------");
    
    let rowIndex = 1;
    for(let b of bookName){
        if(b.includes("Master In Selenium")){
            console.log("Found at Row no: " + rowIndex);
            let priceOfBook = await page.locator("//table[@name='BookTable']//tr["+(rowIndex+1)+"]//td[4]").textContent();
            console.log("Price of this book: " + priceOfBook);
            
            break;
        }
        rowIndex++;
    }
    
    

    await page.waitForTimeout(2000);
})

//8-2.28
