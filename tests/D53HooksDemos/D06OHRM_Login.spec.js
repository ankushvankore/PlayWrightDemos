import {test} from "../D54Fixtures/HRMLogin.js"

test("Orange HRM Login through Fixture", async({page, loginToOHRM})=>{
    //page = loginToOHRM;
    //Even you can comment this. Show this at the end

    page.waitForTimeout(2000);
})