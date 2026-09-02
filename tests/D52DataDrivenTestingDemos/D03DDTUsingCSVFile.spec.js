//https://www.npmjs.com/package/papaparse
//npm install papaparse             //To install CSV Library

import {test, expect} from "@playwright/test"
import Papa from "papaparse"        //Library to read data from csv file
import fs from "fs"                 //Library to read data from file

function readCSV(){
    //Read from CSV File
    let fileData = fs.readFileSync("./TestData/LoginCSVData.csv", "utf-8");
    
    //parse the data to JSON
    let parsedData = Papa.parse(fileData, {header:true, skipEmptyLines:true, dynamicTyping:false});
    //Will treat the first row as heading / property.
    //dynamicTyping:true - will avoid converting any data, all data will be treated as string

    return parsedData.data;
}

let testData = readCSV();

for(let d of testData){
    test("Data driven testing using JSON " + d.Id, async({page})=>{
            await page.goto("https://automationplayground.com/crm/");
            await page.getByText("Sign In").click();
    
            await page.locator('#email-id').fill(d.EmailId);
            await page.locator('#password').fill(d.Password);
            await page.locator('#submit-id').click();
    
            await expect(page).toHaveURL(/customer/);
    
            await page.waitForTimeout(2000);
    });
}

//15-1.03
