import {test} from "@playwright/test"

test ("Handling calender control", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    let calender = page.locator("//input[@id='datepicker']");
    await calender.scrollIntoViewIfNeeded();
    await calender.click();

    let expMonth = "Jan";
    let expYear = "2027";
    let expDay = "29"

    while(!(await page.locator(".ui-datepicker-month").innerText()).includes(expMonth)){
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();
    }

    let allDays = await page.locator("//table[@class='ui-datepicker-calendar']//tbody/tr/td").all();

    for(let d of allDays){
        if((await d.innerText()).includes(expDay)){
            d.click();
            break;
        }
    }

    //await page.locator("//a[text()="+expDay+"]").click();

    await page.waitForTimeout(5000);
})
//10-1.05