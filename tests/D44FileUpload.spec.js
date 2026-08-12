import {test} from "@playwright/test"

test("Handling file upload", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    page.getByText("Upload Single File").scrollIntoViewIfNeeded();

    let fileUpload1 = page.locator("//input[@id='singleFileInput']");
    let fileUpload2 = page.locator("//input[@id='multipleFilesInput']");

    await fileUpload1.setInputFiles("tests/Files/02 4x6  1.jpg");
    await page.waitForTimeout(2000);
    //For multiple files pass the files via [] array
    await fileUpload2.setInputFiles(["tests/Files/02 4x6  1.jpg", "tests/Files/32   4x6   1.jpg"]);

    await page.waitForTimeout(5000);
})
//12-1.54