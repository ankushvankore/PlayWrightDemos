import {test} from "@playwright/test"

test("Refresh a page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1")

    //await page.reload();
    await page.evaluate(()=>{
        window.history.go(0);
    })
    
    await page.waitForTimeout(2000);
})

test("Get the title", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1")
    //let title = await page.title();
    //console.log("Title: " + title);

    let title = await page.evaluate(()=>{
        return document.title;
    })
    console.log("Title: " + title);

    await page.waitForTimeout(2000);
})

test.only("Test Javascript command for webelement", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    //querySelector() - works only with cssSelector
    await page.evaluate(()=>{
        document.querySelector("button.start").click();

        document.querySelector("div.form-group input:nth-of-type(1)").value = "Ankush";
    })

    await page.waitForTimeout(2000);
})

//8-52