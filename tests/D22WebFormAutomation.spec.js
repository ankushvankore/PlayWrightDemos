import {test} from "@playwright/test"
import { log } from "node:console";

test("Automate complete web form", async({page})=>{
    await page.goto("https://formy-project.herokuapp.com/form");

    let firstName = await page.getByPlaceholder("Enter first name");
    console.log("Visible  : " + await firstName.isVisible());
    console.log("Editable : " + await firstName.isEditable());
    console.log("Enable   : " + await firstName.isEnabled());

    if(await firstName.isVisible() && await firstName.isEditable){
        firstName.fill("Harshada");
    }

    await page.getByPlaceholder("Enter last name").fill("Vankore");
    await page.getByPlaceholder("Enter your job title").fill("Student");

    let cRadio = await page.locator("//input[@type='radio']").nth(1);
    await cRadio.click();

    //Dropdown list
    let dropDown = page.locator("#select-menu");
    await dropDown.scrollIntoViewIfNeeded();
    dropDown.selectOption("2-4");

    await page.locator("#datepicker").fill("07/23/2026");   

    await page.waitForTimeout(2000);
})

//7