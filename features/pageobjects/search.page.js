const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchInput() { return $('input[data-testid="search-input"]') }
    get filterByCategory() { return $('//*[@id="wwOneHeader"]/div/div[1]/header/div[6]/div[2]/div/div/div[1]/nav/div[1]/a/div/div/span') }
    get wishListIcon() { return $('//*[@id="app-root"]/div/div[1]/div[6]/div/div/main/div/div[2]/div[1]/a/div/div[2]/div[2]/div') }
    get modalOverlay() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]') }
    get clickCookiesButton() { return $('button[id="onetrust-accept-btn-handler"]') }
    get loginPageModal() { return $('//*[@id="app-root"]/div/div[2]/div/div[1]/div/div[2]/div[2]/p[1]') }
    get productListPage() { return $('//*[@id="app-root"]/div/div[1]/div[6]/div/div/main/header/div[1]/div/div') }


    open(url) {
        return super.open(url);
    }

    async enterSearchTerm(searchTerm) {
        await (await this.clickCookiesButton).click();
        await (await this.searchInput).setValue(searchTerm);
        await (await this.filterByCategory).click();
    }

    async searchResults() {
        await (await this.modalOverlay).waitForExist({ timeout: 5000 });
        await (await this.modalOverlay).click();
        await (await this.productListPage).waitForExist({ timeout: 5000 });
        const a = await (await this.productListPage).getText();
        expect(a).toHaveTextContaining('Produkte')
    }
}

module.exports = new SearchPage();
