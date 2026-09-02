import {test} from "@playwright/test"

/*
svg stands for Scalar Vector Graph
To handle / locate svg elements, only XPath can be used
syntax:
//*[local-name()='svg' and @attribute='value']
*/

test("Handling SVG Elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    let svgElement1 = page.locator("(//*[local-name()='svg' and @width='30'])[1]");
    await svgElement1.scrollIntoViewIfNeeded();
    await svgElement1.highlight();
    await page.waitForTimeout(2000);
    await svgElement1.hideHighlight();

    let svgElement2 = page.locator("(//*[local-name()='svg' and @width='30'])[2]");
    await svgElement2.scrollIntoViewIfNeeded();
    await svgElement2.highlight();
    await page.waitForTimeout(2000);
    await svgElement2.hideHighlight();

    let svgElement3 = page.locator("(//*[local-name()='svg' and @width='30'])[3]");
    await svgElement3.scrollIntoViewIfNeeded();
    await svgElement3.highlight();
    await page.waitForTimeout(2000);
    await svgElement3.hideHighlight();


    await page.waitForTimeout(2000);
})