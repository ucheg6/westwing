Feature: The WestwingNow product features

    Scenario: As a user, I can search for product
        Given I am on the WestwingNow home page
        When  I search for "möbel"
        Then  I should see product listing page with a list of products 
        When  I click on wishlist icon of the first found product
        Then  I should see the login/registration overlay
        
        Example:
        |möbel|