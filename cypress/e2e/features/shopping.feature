Feature: Shopping Checkout Validation

  Scenario: Validate flow until checkout of an item
    Given I am logged into the website
    When I search for an item called "Kensington Orbit 72337"
    And I add the first item to the cart
    And I proceed to checkout
    And I fill the payment information
    Then I validate if my purchase was made successfully