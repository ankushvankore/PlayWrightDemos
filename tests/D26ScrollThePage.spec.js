import {test} from "@playwright/test"
import { scrollThePage } from "./Utility";

test("SCroll the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    /*await page.evaluate(()=>{
        //window.scrollTo(0, 5000);
        window.scrollTo(0, window.document.body.scrollHeight)
    })*/

        //Scroll using utility
    await scrollThePage(page.locator("(//a[text()= 'Home'])[3]"));

    await page.waitForTimeout(2000);
}) 