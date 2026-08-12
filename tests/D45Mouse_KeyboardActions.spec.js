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

//12-2.18