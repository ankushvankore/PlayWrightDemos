import {test} from "@playwright/test"
import { selectByIndex, selectByValue } from "./Utility";

test("Handling multiple dropdown lists", async ({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    let dayDD = page.locator(".day");
    let monthDD = page.locator(".month");
    let yearDD = page.locator(".year");

    //await dayDD.selectOption("29");
    //selectByValue(page, ".day", "29");
    selectByValue(page.locator(".day"), "29");
    //await monthDD.selectOption({index:1});
    selectByValue(page.locator(".month"), "JAN");
    //await yearDD.selectOption({value:"1979"});
    //selectByValue(page.locator(".year"), "1979");
    selectByIndex(page.locator(".year"), 6);

    await page.waitForTimeout(2000);
})

//7.35