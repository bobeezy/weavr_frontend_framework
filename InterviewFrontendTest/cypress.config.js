const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports/tests",
    charts: true,
    reportPageTitle: 'Weavr Tests Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/specs/web/*.js',
    baseUrl: 'https://www.saucedemo.com',
    screenshotsFolder: 'cypress/screenshots',
    // Command timeout overridden for E2E tests
    pageLoadTimeout: 40000
  },
})
