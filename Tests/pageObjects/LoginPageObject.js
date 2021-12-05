class LoginPO {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
    }
    async Navigate() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }
    async FillAndLogin(usernmame, password) {
        await this.page.click('id=login2');
        await this.page.fill('#loginusername', usernmame);
        await this.page.fill('#loginpassword', password);
        await this.page.keyboard.press("Tab");
        await this.page.keyboard.press("Tab");
        await this.page.keyboard.press("Enter");
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        await delay(2000);
    }
    async Validate()
    {
        const text = await this.page.innerText('id=nameofuser');
        return text;
    }
}
module.exports = { LoginPO };

