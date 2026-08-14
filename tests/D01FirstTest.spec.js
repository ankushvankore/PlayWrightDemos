//Import playwritht library

/*
Execution ways
1. npx playwright test => Will execute all the tests from the tests folder
2. npx playwright test tests/Name of test.spec.js => single test in headless mode
3. npx playwright test tests/Name of test.spec.js --headed => Single test in headed mode
4. npx playwright test tests/Name of test.spec.js --headed --project=chromium => Execute tc on chrome

5. for execution only on msedge
write the code inside the test()
let browser = await chromium.launch({headed:false, channel: "msedge"})
this time just call
npx playwright test tests/Name of test.spec.js 
on the terminal

*/


import {test} from "@playwright/test";

test("Test case1", ()=>{
    console.log("This is first test...");    
})

test("Test case2", ()=>{
    console.log("This is second test...");    
})