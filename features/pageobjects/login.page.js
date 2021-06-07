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
    get loginPageModal() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]/div/div[2]/div[2]/p[1]') }
    get modalOverlay() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]') }



    async clickWishListIcon() {
        await (await this.wishListIcon).click();    
    }


    async checkLoginModal() {
        await (await this.loginPageModal).waitForExist({ timeout: 5000 });
        const a = await (await this.loginPageModal).getText();
        expect(a).toHaveTextContaining('123444')
    }
}

module.exports = new LoginPage();
