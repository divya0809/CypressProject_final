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
      // on('task', {
      //   updateConfig({ newPassword }) {
      //     try {
      //       const configPath = path.resolve(__dirname, 'cypress.config.js'); // Ensure correct path
      //       let configData = {};

      //       if (fs.existsSync(configPath)) {
      //         configData = require(configPath); // Read existing config
      //       }

      //       // Update the password in Cypress environment variables
      //       configData.env.password = newPassword;

      //       // Write the updated config back to the file
      //       fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));
      //       return `Password updated successfully!`;
      //     } catch (error) {
      //       return `Error updating password: ${error.message}`;
      //     }
      //   }
      // });
      // on('task', {
      //   readExcelFile(filePath) {
      //     const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
      //     const workbook = xlsx.readFile(absolutePath);
      //     const sheetName = workbook.SheetNames[0];
      // //     const worksheet = workbook.Sheets[sheetName];
      // //     const data = xlsx.utils.sheet_to_json(worksheet);
      // //     return data;
        
      // //   },
      //   parseXlsx({ filepath }) {
      //     if (!filepath) {
      //       throw new Error("File path is undefined! Check if the correct path is passed.");
      //     }

      //     const absolutePath = path.resolve(filepath); // Ensures absolute path resolution

      //     if (!fs.existsSync(absolutePath)) {
      //       throw new Error(`File not found: ${absolutePath}`);
      //     }

      //     const xlData = xlsx.parse(fs.readFileSync(absolutePath)); 
      //     return xlData;
      // }
    //})
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
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
};