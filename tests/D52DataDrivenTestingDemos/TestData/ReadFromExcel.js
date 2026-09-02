import XLSX from "xlsx"

//Read file [workbook]
const workbook = XLSX.readFile("tests/D52DataDrivenTestingDemos/TestData/ExcelData.xlsx");
//read sheet
const sheet = workbook.Sheets['LoginData'];

//read data from cell
/*let data = sheet['A1'];

console.log(data);
console.log(data.v);
*/

let excelToJson = XLSX.utils.sheet_to_json(sheet);
console.log(excelToJson);


