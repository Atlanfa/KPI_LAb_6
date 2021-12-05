const jestpackage = require('jest');
class BuyPO {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
    }
    async Navigate() {
        await this.page.goto('https://www.demoblaze.com/prod.html?idp_=1');
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        await delay(5000);
    }
    async Buy()
    {
        await this.page.click('a[onclick^="addToCart"]');
    }
}
module.exports = { BuyPO };