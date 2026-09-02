import {test} from "@playwright/test"

test("Automate mouse and keyboard actions", async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    await page.getByText("right click me").click({button:'right'});

    page.on("dialog", async(alertBox)=>{
        console.log("Alert Type: " + alertBox.type());
        console.log("Alart Says: " + alertBox.message());
        await alertBox.accept();
        
    })

    let allMenus = await page.locator("//ul[@class='context-menu-list context-menu-root']//li/span").all();
    for(let a of allMenus){
        console.log(await a.innerText());        
    }

    

    for(let a of allMenus){
        if((await a.innerText()).includes('Copy')){
            a.click();
            break;
        }
    }

    await page.waitForTimeout(2000);
})

test("Handlin double clidk", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    page.on("dialog", async(alertBox)=>{
        console.log("Alert Type: " + alertBox.type());
        console.log("Alart Says: " + alertBox.message());
        await alertBox.accept(); 
    })

    await page.getByRole('button', {name:'Double-Click Me To See Alert'}).dblclick();

})
/*
For capturing video and screen shot add 2 parameters in playwrigh.config.json file

after
    trace: 'on-first-retry',
add these 2 arguments
    video:'on',
    screenshot: 'on'

you can see the screenshots in playwright report folder
for video you can simpally open the report generated at the last using
npx playwright show-report


*/

test('Handling mouse hover', async({page})=>{
    await page.goto("https://www.naukri.com/", {waitUntil:"load"});
    //will waits till page gets loaded for some time.
    //This is kind of pageLoadTimeout
    await page.locator("//span[text()='Jobs']").hover();

    let allLinks = await page.locator("//div[@class='nI-gNb-dropdown undefined nI-gNb-dropdown__c3 nI-gNb-dropdown--expand nI-gNb-Jobs']//ul/li").allInnerTexts();

    for(let a of allLinks){
        console.log(a);
    }

    await page.waitForTimeout(2000);
})

test("Handling drag and drop", async ({page})=>{
    await page.goto("https://jqueryui.com/droppable/");

    let frame = page.frameLocator(".demo-frame");
    let source = frame.locator("#draggable");
    let target = frame.locator("#droppable")

    source.dragTo(target);

    //page.dragAndDrop();
    //avoid this method because these method accepts string parameters
    //and we are having locators to be passed to the method

    await page.waitForTimeout(3000);
})

test("Keyboard action for copy paste", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    let textToPaste = 'standard_user';
    await page.locator("#user-name").focus();
    await page.keyboard.insertText(textToPaste);

    await page.locator("#user-name").press("ControlOrMeta+A");
    await page.locator("#user-name").press("ControlOrMeta+C");

    await page.locator("#password").press("ControlOrMeta+V")


    await page.waitForTimeout(2000);
})

test("Handling keyboard action - tab", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.locator("#name").focus();
    await page.locator("#name").pressSequentially("Sakshi", {delay:500});

    await page.keyboard.press('Tab');
    await page.keyboard.type("Fadtare");

    await page.keyboard.press('Tab');
    await page.keyboard.type("7878787878");

    await page.keyboard.press('Tab');
    await page.keyboard.type("Kolhapur");

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    
    await page.waitForTimeout(3000);
    /*
    Common keys
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Escape');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowRight');*/
})

test.only("Silder automation", async({page})=>{
    await page.goto("https://jqueryui.com/slider/");

    let frame = page.frameLocator(".demo-frame");
    let slider = frame.locator("#slider");
    let sliderArea = frame.locator(".ui-slider-handle");

    sliderArea.dragTo(slider, {targetPosition: {
        x:100, y:0
    }})

    await page.waitForTimeout(2000);
})

//13-1.20