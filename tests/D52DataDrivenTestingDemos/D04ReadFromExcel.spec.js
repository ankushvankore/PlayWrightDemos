import {test, expect} from "@playwright/test"
import XLSX from "xlsx"

function readFromExcel(){
    //Read file [workbook]
    const workbook = XLSX.readFile("./TestData/ExcelData.xlsx");
    //read sheet
    const sheet = workbook.Sheets['LoginData'];

    let excelToJson = XLSX.utils.sheet_to_json(sheet);

    return excelToJson;
}

let testData = readFromExcel();

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
