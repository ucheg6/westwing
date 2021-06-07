const { Given, When, Then } = require('@cucumber/cucumber');

const SearchPage = require('../pageobjects/search.page');
const LoginPage = require('../pageobjects/login.page');


Given(/^I am on the WestwingNow home page$/, async() => {
    await SearchPage.open()
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
    await LoginPage.checkLoginModal()
});

