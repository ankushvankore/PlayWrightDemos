export class LoginPage{
    #page;
    #userName;
    #password;
    #loginBtn;
    #warningMessage;

    constructor(page){
        //this page from playwright library (page fixture)
        this.#page = page;
        this.#userName = page.locator("//input[@name='username']");
        this.#password = page.locator("//input[@name='password']");
        this.#loginBtn = page.locator(".oxd-button");
        this.#warningMessage = page.locator("//p[text()='Invalid credentials']");
    }

    //Actions
    async openApplication(){
        await this.#page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async enterUserName(un){
        await this.#userName.fill(un);
    }

    async enterPassword(ps){
        await this.#password.fill(ps);
    }

    async clickOnLoginButton(){
        await this.#loginBtn.click();
    }

    async login(un, ps){
        await this.enterUserName(un);
        await this.enterPassword(ps);
        await this.clickOnLoginButton();
    }

    async getTitle(){
        return this.#page.title();
    }

    async getWarningMessage(){
        return await this.#warningMessage.innerText();
    }
}