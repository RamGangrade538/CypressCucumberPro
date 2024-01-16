const donatepage = {
  locators: {
    donateButton: "a.globat-cta[title='DONATE']",
    donateNowButton: "li.amount button[data-btn-index='0']:eq(1)",
    donateBtn: "button[class='donate-btn']:eq(1)",
    directDebitLink: "[title='Donate monthly via direct debit']",
    continueDonationAmountBtn: ".accContinue.btn.btn-primary[role='button']:visible",
    giftAidCheckbox: "[class='control-indicator']:eq(2)",
    continueGiftAidBtn: "button.collapsed.btn.btn-primary.accContinue.an-form-accordion-continue:eq(1)",
    titleDropdown: "select[name='title']",
    firstNameInput: "[name='first_name']:visible",
    surnameInput: "input[name='surname']:visible",
    emailAddressInput: "[name='email_address']:visible",
    postcodeInput: "[title='Enter your postcode to select an address']:eq(0)",
    postcodeResults: "ul.postcode-results-list button",
    accountNumberInput: "input[name='dd_account_number']:visible",
    sortCodeInput: "input[name='dd_sort_code']:visible",
    accountNameInput: "input[name='dd_account_name']:visible",
    paymentDateInput: "input.dd-payment-date[value='1st']",
    updateEmailCheckbox: "input[name='joinus_update_email']",
    updatePhoneCheckbox: "input[name='joinus_update_phone']",
    termsAndConditionsCheckbox: "#checkbox- > .control > .tooltip",
    continueAddressAndBillingBtn: ".accContinue.btn.btn-primary[role='button']:eq(2)"
  },

  //  Create methods
  clickDonateButton() {
    cy.get(this.locators.donateButton).should("be.visible").click();
  },
  clickDonatenowButton() {
    cy.get(this.locators.donateNowButton).should("be.visible").click();
    cy.get(this.locators.donateBtn).should("be.visible").click({ force: true });
  },
  clickDirectDebit() {
    cy.get(this.locators.directDebitLink).click({ force: true });
  },
  clickContinueDonationAmount() {
    cy.get(this.locators.continueDonationAmountBtn).click({ force: true });
  },
  clickGiftAidTickBox() {
    cy.log("tv checkbox");
    cy.get(this.locators.giftAidCheckbox).click({ force: true });
  },
  clickContinueGiftAid() {
    cy.get(this.locators.continueGiftAidBtn).should("be.visible").click({ force: true });
  },
  enterAddressAndBillingDetails() {
    cy.log('hii');
    cy.get(this.locators.titleDropdown).select("Mr");
    cy.get(this.locators.titleDropdown).should("have.value", "Mr");
    cy.get(this.locators.firstNameInput).type("Ram");
    cy.get(this.locators.surnameInput).type("Son");
    cy.get(this.locators.emailAddressInput).type("ramson87@gmail.com");
    cy.get(this.locators.postcodeInput).type("SW1W0NY{enter}");
    cy.get(this.locators.postcodeResults).each(($el) => {
      const buttonText = $el.text().trim();
      const valueToSelect = "Flat 5, Belgravia Court, London, SW1W 0NY";
      if (buttonText.includes(valueToSelect)) {
        cy.wrap($el).should("contain", valueToSelect).click();
      }
    });
    cy.get(this.locators.accountNumberInput).type("00813796");
    cy.get(this.locators.sortCodeInput).type("800551");
    cy.get(this.locators.accountNameInput).type("Ram");
    cy.get(this.locators.paymentDateInput).click({ force: true });
    cy.get(this.locators.updateEmailCheckbox).click({ force: true });
    cy.get(this.locators.updatePhoneCheckbox).click({ force: true });
    cy.get(this.locators.termsAndConditionsCheckbox).click({ force: true });
  },
  clickContinueAddressAndBilling() {
    cy.get(this.locators.continueAddressAndBillingBtn).click({ force: true });
  },
};
export default donatepage;
