const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // Other setup options can be added here
    },
    specPattern: 'CypressCucumberPro/cypress/e2e/features/*.feature', 
    supportFile: 'CypressCucumberPro/cypress/support/e2e.js',  
    // "nonGlobalStepDefinitions": true,
    // "stepDefinitions": "CypressCucumberPro/cypress/e2e/stepDefinitions",
  },
});
