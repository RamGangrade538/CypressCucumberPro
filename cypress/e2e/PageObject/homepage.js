const homepage = {
    visit() {
      cy.visit('https://www.savethechildren.org.uk/');
      cy.get("#onetrust-accept-btn-handler").click();

    },
  
    goToUKSite() {
      cy.get('#popup-accept-button').click(); // 
    }
  }
  
  export default homepage;
  
  