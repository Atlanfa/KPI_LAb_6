//login test
const playwright = require('playwright');
const { LoginPO } = require('./pageObjects/LoginPageObject');
const tests = require("@playwright/test");
tests.test('Login with data: username:password -> succsses', async({page}) =>
{
    const loginPO = new LoginPO(page);
    await loginPO.Navigate();
    await loginPO.FillAndLogin("username","password");
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1000);
    tests.expect(await loginPO.Validate()).toBe("Welcome username");
    tests.expect(await page.screenshot()).toMatchSnapshot('main_page.png');
});
