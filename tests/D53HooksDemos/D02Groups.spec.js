import {test} from "@playwright/test"

//IMP - mark fullyparllel: false in config file
//after showing execution once


//Also show the execution of earlier file

test.describe("This is suite for smoke test", async ()=>{
    test("Home page test", async({page})=>{
    console.log("This is home page test");    
    })

    test("Search page test", async({page})=>{
        console.log("This is search page test");    
    })
})

test.describe("This is regression for smoke test", async ()=>{
    test("Login page test", async({page})=>{
    console.log("This is login page test");    
    })

    test("Payment page test", async({page})=>{
        console.log("This is payment page test");    
    })
})