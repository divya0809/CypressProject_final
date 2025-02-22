const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');
const xlsx = require('node-xlsx');
const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    watchForFileChanges: false,
    video: true, // Enable video recording
    screenshot: true, // Enable screenshots on test failure
    defaultCommandTimeout: 120000, // Increase timeout to 120 sec
    taskTimeout: 120000,

    setupNodeEvents(on, config) {
      on('task', {
        updateConfig({ newPassword }) {
          try {
            const configPath = path.resolve(__dirname, 'cypress.config.js'); // Ensure correct path
            let configData = {};

            if (fs.existsSync(configPath)) {
              configData = require(configPath); // Read existing config
            }

            // Update the password in Cypress environment variables
            configData.env.password = newPassword;

            // Write the updated config back to the file
            fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));
            return `Password updated successfully!`;
          } catch (error) {
            return `Error updating password: ${error.message}`;
          }
        }    
      });
      on('task', {
        readExcelFile(filePath) {
          const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return data;
        }
      });

      return config;
    }
  },

  env: {
    baseUrl: "http://10.1.0.83/#/",
    email: "divya.chaudhari@neilsoft.com",
    password: "A4rE$UD&MDge",
    OTP: "123459",
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
};
