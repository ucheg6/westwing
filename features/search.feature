Feature: The WestwingNow product features

    Scenario: As a user, I can search for product
        Given I am on the WestwingNow home page "https://www.westwingnow.de/"
        When  I search for "möbel"
        Then  I should see product listing page with a list of products 
        When  I click on wishlist icon of the first found product
        Then  I should see the login/registration overlay
        When  I switch to login form of the overlay
        And   I log in with email and password <email> <password> credentials
        Then  The product should be added to the wishlist and the wishlist icon on the product is filled in and wishlist counter in the website header shows 1
        And   I go to the wishlist page "https://www.westwingnow.de/customer/wishlist/index/"
        And   I delete the product from my wishlist
        Then  The product should be removed from my wishlist
        
        Examples:
        |email| |password|
        |"akogwuuche@ymail.com"| |"uchechukwu"|