const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WishlistPage extends Page {
    /**
     * define selectors using getter methods
     */
    get wishlistPageTitle () { return $('//*[@id="wishlistRoot"]/div/div[4]/div/ul/div/div[1]/p[1]') }
    get wishlistPageTitle2 () { return $('//*[@id="wishlistRoot"]/div/div[4]/div/ul/div/div[1]/p[1]/i') }
    get wishlistIconFilled () { return $('#app-root > div > div.page > div.App__StyledContentWrapper-sc-51hbyg-0.gyQCjH > div > div > main > div > div.ProductGrid__StyledGrid-zyj4tq-0.fjUkRM > div:nth-child(1) > a > div > div.BadgesGrid__BadgesGridLayout-kqvz9j-0.dimkmn.GenericProductBadges__ProductBadgesGrid-z1yx94-0.bSrkAe > div.BadgesGrid__BadgesTopRight-kqvz9j-3.gytrGh > div > svg > path.filled') }
    get wishlistCounterIcon () { return $('//*[@id="wwOneHeader"]/div/div[1]/header/div[8]/div[3]/div/span[1]/span') }


    open(url) {
        return super.open(url);
    }

    async checkWishlistItem() {
        await (await this.wishlistIconFilled).waitForExist({ timeout: 5000 });
        await (await this.wishlistIconFilled).scrollIntoView();
      const a = await (await this.wishlistIconFilled).getAttribute('class');
      expect(a).toEqual('filled')
      await (await this.wishlistCounterIcon).waitForExist({ timeout: 5000 });
      await (await this.wishlistCounterIcon).scrollIntoView();
      const b = await (await this.wishlistCounterIcon).getText();
      expect(b).toEqual('1')
  }
    async deleteItemFromWishlist() {
        const elem = await browser.execute(() => document.querySelector("#wishlistRoot > div > div.wishlistContainer.wishlistContainer_detail > div > ul > li > button"))
        await browser.execute(function(argument) { 
            argument.click();
          }, elem);
    }
    async checkWishlistPage() {
          await (await this.wishlistPageTitle).waitForExist({ timeout: 5000 });
        const a = await (await this.wishlistPageTitle).getText();
        await (await this.wishlistPageTitle2).waitForExist({ timeout: 5000 });
        const b = await (await this.wishlistPageTitle2).getText();
        const c = `${a}${b}`
        expect(c).toEqual('Die Wunschliste ist momentan leer')
    }
}

module.exports = new WishlistPage();
