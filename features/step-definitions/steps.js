const { Given, When, Then } = require('@cucumber/cucumber');

const SearchPage = require('../pageobjects/search.page');
const LoginPage = require('../pageobjects/login.page');
const WishlistPage = require('../pageobjects/wishlist.page');


Given(/^I am on the WestwingNow home page "([^"]*)?"$/, async(url) => {
    await SearchPage.open(url)
    expect(browser).toHaveTitleContaining('Ihr Möbel & Interior Online-Shop | WestwingNow')
});

When(/^I search for "([^"]*)"$/, async (searchTerm) => {
    await SearchPage.enterSearchTerm(searchTerm)
});

Then(/^I should see product listing page with a list of products$/, async () => {
    await SearchPage.searchResults()
});

When(/^I click on wishlist icon of the first found product$/, async () => {
    await LoginPage.clickWishListIcon()
});

Then(/^I should see the login\/registration overlay$/, async () => {
    await LoginPage.checkRegisterLoginModal()
});

When(/^I switch to login form of the overlay$/, async () => {
    await LoginPage.swithToLoginForm()
});

When(/^I log in with email and password "([^"]*)" "([^"]*)" credentials$/, async (email, password) => {
    await LoginPage.login(email, password);
});

Then(/^The product should be added to the wishlist and the wishlist icon on the product is filled in and wishlist counter in the website header shows 1$/, async () => {
    await WishlistPage.checkWishlistItem()
});

When(/^I go to the wishlist page "([^"]*)?"$/, async (url) => {
    await WishlistPage.open(url)
});

When(/^I delete the product from my wishlist$/, async () => {
    await WishlistPage.deleteItemFromWishlist()
});

Then(/^The product should be removed from my wishlist$/, async () => {
    await WishlistPage.checkWishlistPage()
});