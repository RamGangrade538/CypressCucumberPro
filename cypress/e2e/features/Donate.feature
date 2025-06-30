Feature: Donate on Save the Children website

  Scenario: Make a donation with Gift Aid via direct debit
    Given user on the Save the Children website
    And user click on Donate
    And user click on donate now
    And user click on Donate via direct debit
    And user continue with the donation amount
    And user add Gift Aid with the TV Ad option
    And user enter mandatory address and billing details
    And user click on Continue
    Then user should see a confirmation message