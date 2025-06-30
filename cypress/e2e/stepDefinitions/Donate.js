import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import homepage from "../PageObject/Homepage";
import donatepage from "../PageObject/donatepage";


Given("user on the Save the Children website", () => {
  homepage.visit();
});

And("user click on Donate", () => {
donatepage.clickDonateButton();
});

And("user click on donate now", () => {

  donatepage.clickDonatenowButton();

});

And("user click on Donate via direct debit", () => {
  donatepage.clickDirectDebit();
});

And("user continue with the donation amount", () => {
  donatepage.clickContinueDonationAmount();

});

And("user add Gift Aid with the TV Ad option", () => {
  donatepage.clickGiftAidTickBox();
  donatepage.clickContinueGiftAid();
});

And("user enter mandatory address and billing details", () => {
  donatepage.enterAddressAndBillingDetails();
  donatepage.clickContinueAddressAndBilling();
});
And("user click on Continue", () => {
  donatepage.clickContinueAddressAndBilling();
});
Then("user should see a confirmation message", () => {
  cy.log('User is able to donate on save children website')
});