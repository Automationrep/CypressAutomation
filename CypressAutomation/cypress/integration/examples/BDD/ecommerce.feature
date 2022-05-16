Feature: End to End Ecommerce Validation
Scenario: Ecommerce Product delivery
Given I open ecommerce page
When I add item to cart
And Validate the total price
Then select the country and verify thank you