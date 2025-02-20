const fs = require('fs');
const path = require('path');
const xlsx = require('node-xlsx');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://10.1.0.83/#/",
    watchForFileChanges: false,
    video: true, // Enable video recording
    screenshot: true, // Enable screenshots on test failure
    defaultCommandTimeout: 120000,  // Increase timeout to 120 sec
    taskTimeout: 120000,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        updateConfig({ path, newPassword }) {
          if (!fs.existsSync(path)) {
            return null;
          }

          let configFile = fs.readFileSync(path, 'utf-8');

          // Replace old password with the new one
          configFile = configFile.replace(/password: ".*?"/, `password: "${newPassword}"`);

          fs.writeFileSync(path, configFile, 'utf-8');
          return null;
        },
        
        parseXlsx({ filepath }) {
          if (!filepath) {
            throw new Error("File path is undefined! Check if the correct path is passed.");
          }

          const absolutePath = path.resolve(filepath); // Ensures absolute path resolution

          if (!fs.existsSync(absolutePath)) {
            throw new Error(`File not found: ${absolutePath}`);
          }

          const xlData = xlsx.parse(fs.readFileSync(absolutePath)); 
          return xlData;
        }
      });

      return config;
    },
  },

  env: {
    email: "akash.gunjegaon@neilsoft.com",
    password: "Saurabh@2",
    OTP: "123459",
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
});
