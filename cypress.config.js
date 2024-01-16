const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern :"cypress/e2e/**/*.feature",
   // baseUrl: "https://reqres.in/",
    //   "env": {
    //     "failOnStatusCode": false
    // } 
  }
};
