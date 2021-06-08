const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get wishListIcon() { return $('//*[@id="app-root"]/div/div[1]/div[6]/div/div/main/div/div[2]/div[1]/a/div/div[2]/div[2]/div') }
    get modalOverlay() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]') }
    get registerPageModalTitle() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]/div/div[2]/div[2]/p[1]') }
    get modalOverlay() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]') }
    get loginFormPageTitle() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]/div/div[2]/div[2]/p[1]'); }
    get emailInput() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]/div/div[2]/form/div[1]/input'); }
    get passwordInput() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]/div/div[2]/form/div[2]/input'); }
    get productListPage() { return $('//*[@id="app-root"]/div/div[1]/div[6]/div/div/main/header/div[1]/div/div') }

    async clickWishListIcon() {
        const elem = await browser.execute(() => document.querySelector("#app-root > div > div.page > div.App__StyledContentWrapper-sc-51hbyg-0.gyQCjH > div > div > main > div > div.ProductGrid__StyledGrid-zyj4tq-0.fjUkRM > div:nth-child(1) > a > div > div.BadgesGrid__BadgesGridLayout-kqvz9j-0.dimkmn.GenericProductBadges__ProductBadgesGrid-z1yx94-0.bSrkAe > div.BadgesGrid__BadgesTopRight-kqvz9j-3.gytrGh > div"))
        await browser.execute(function(argument) { 
            argument.click();
          }, elem);
    }


    async checkRegisterLoginModal() {
        const elem = await (await this.registerPageModalTitle).waitForExist({ timeout: 5000 });
        expect(elem).toBeDisplayed()
    }
    
    async swithToLoginForm() {
        const elem = await browser.execute(() => document.querySelector("#app-root > div > div:nth-child(2) > div > div.GenericPopup__StyledContent-sc-1pv2djh-1.kFzRGE > div > div.LoginAndRegisterPopUp__ContentWrapper-sc-1j2e29-0.edWyKl > div.Footer__StyledWrapper-tw7wgf-0.Khzjb > button"))
        await browser.execute(function(argument) { 
            argument.click();
          }, elem);
          await (await this.loginFormPageTitle).waitForExist({ timeout: 5000 });
        const a = await (await this.loginFormPageTitle).getText();
        expect(a).toEqual('Bereits registriert?')
    }

    async login(email, password) {
        await (await this.emailInput).setValue(email);
        await (await this.passwordInput).setValue(password);
        const elem = await browser.execute(() => document.querySelector("#app-root > div > div:nth-child(2) > div > div.GenericPopup__StyledContent-sc-1pv2djh-1.kFzRGE > div > div.LoginAndRegisterPopUp__ContentWrapper-sc-1j2e29-0.edWyKl > form > button"))
        await browser.execute(function(argument) { 
            argument.click();
          }, elem);

        await (await this.productListPage).waitForExist({ timeout: 5000 });
        const a = await (await this.productListPage).getText();
        expect(a).toHaveTextContaining('Produkte')
        await browser.pause(5000)
    }
}

module.exports = new LoginPage();
