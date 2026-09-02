import {test} from "@playwright/test"

//Make fully parallel: true


test.describe.serial(()=>{
    test.beforeAll("This is beforeAll hook", async()=>{
    console.log("Before all hook executed...");
    })

    test.beforeEach("This is beforeEach hook", async()=>{
        console.log("Before each hook executed...");
    })

    test.afterEach("This is afterEach hook", async()=>{
        console.log("After Each hook executed...");
    })

    test.afterAll("This is afterAll hook", async()=>{
        console.log("After all hook executed...");
    })

    test("Home page test", async({page})=>{
        console.log("This is home page test");    
    })

    test("Search page test", async({page})=>{
        console.log("This is search page test");    
    })

})

//16-41.11