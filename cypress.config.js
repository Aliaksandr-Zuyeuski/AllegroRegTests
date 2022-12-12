const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://allegro.pl.allegrosandbox.pl',
    supportFile: false,

  },
});
