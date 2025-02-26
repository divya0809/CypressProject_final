const fs = require('fs');
const path = require('path');
const XLSX = require('node-xlsx');
const { defineConfig } = require("cypress");
const xlsx = require('xlsx');

module.exports = {
  e2e: {
    watchForFileChanges: false,
    video: true, // Enable video recording
    screenshot: true, // Enable screenshots on test failure
    defaultCommandTimeout: 120000, // Increase timeout to 120 sec
    taskTimeout: 120000,

    setupNodeEvents(on, config) {
     
    on("task", {
      readExcelFile({ filePath }) {
          const fullPath = path.join(__dirname, "./cypress/fixtures", filePath);

          if (!fs.existsSync(fullPath)) {
              throw new Error(`File not found: ${fullPath}`);
          }

          // Read the Excel file
          const workbook = xlsx.readFile(fullPath);
          const sheetName = workbook.SheetNames[0]; // Get the first sheet
          const sheet = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

          return sheet; // Return Excel data as 
        }
      })
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
    reportDir: 'cypress/reports/Htmlreports',
    overwrite: false,
    html: true,
    json: false,
    charts: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
};