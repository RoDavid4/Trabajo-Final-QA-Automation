const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mi Reporte',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  env: {
    "chromeWebSecurity": false
  },
  /* pageLoadTimeout: 180000, // Aumenta el tiempo de espera a 180 segundos 
  defaultCommandTimeout: 10000 */
});
