const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/results/json',
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
      charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },
    require('cypress-mochawesome-reporter/plugin')(on, {
  report: false  // disables auto HTML generation
});},
    watchForFileChanges:true,
    retries:{
      runMode:2,
      openMode:3
    }
  },
});
