/*import 'cypress-xpath';
import { readExcel } from '../../support/readExcel.js';
describe('Login Test for Multiple Users', () => {
  before(() => {
    cy.readExcel('cypress/fixtures/users.xlsx', 'Users').then((users) => {
      cy.wrap(users).as('userData');
    });
  });

  it('should login with multiple users', function() {
    cy.get('@userData').then((users) => {
      users.forEach((user) => {
        cy.visit('http://10.1.0.83/#/login');
        
        cy.get('#email').type(`${Cypress.env("email")}{Enter}`);
        cy.get('#exampleInputPassword1').type(`${Cypress.env("password")}{Enter}`);
        cy.wait(1000);
        cy.xpath("//div/input[1]").type(`${Cypress.env("OTP")}{Enter}`);
        cy.wait(3000);

        // Add assertions as needed
        cy.url().should('include', '/dashboard');
        
        // Logout before the next iteration
        cy.get('#logoutButton').click();
      });
    });
  });
});
*/
/*
import 'cypress-xpath';
import { readExcel } from '../../support/readExcel.js';
import Common from "../Common"; 

describe("Data Driven with", () => {
  let users;  // Declare a variable to store users data

  before(() => {
    // Read the Excel file before the test begins
    cy.fixture('users01.xlsx').then((fileData) => {
      users = readExcel(fileData); // Parse the Excel file data here

        
      //users = readExcel('../../fixtures/users01.xlsx')
   });

  });

  it('should login with multiple users', () => {
    users.forEach((user) => {
      cy.visit('http://10.1.0.83/#/login');
      
      // Use user data instead of environment variables
      cy.get('#email').type(user.email);  // Use email from Excel data
      cy.get('#exampleInputPassword1').type(user.password);  // Use password from Excel data
      cy.wait(1000);
      cy.xpath("//div/input[1]").type(user.otp);  // Use OTP from Excel data
      cy.wait(3000);

      // Add assertions as needed
      cy.url().should('include', '/dashboard');
      
      // Logout before the next iteration
      cy.get('#logoutButton').click();
    });
  });
});
*/
import 'cypress-xpath';
import { readExcel } from '../../support/readExcel.js';
import Common from "../Common.js"; 
describe("Data Driven with", () => {
  it("normal login", ()=>{
    cy.parseXlsx('cypress/fixtures/users01.xlsx').then((excelData) => {
      if (!excelData || excelData.length === 0) {
        throw new Error("Excel file is empty or not parsed correctly.");
      }

      const rowCount = excelData[0].data.length;
      cy.log(`Total rows: ${rowCount}`);

      for(let i = 1; i < rowCount; i++){
        let value = excelData[0].data[1]
        cy.url().then((currentUrl) => {
          cy.log("Current URL:", currentUrl);
        });
        
        cy.get('form', { timeout: 60000 }).should('exist'); // Ensure login form exists
        
        // Try different selectors if needed
        cy.get('input[name="username"]', { timeout: 60000 }).should('exist').should('be.visible').type(value[0]);
        
        cy.get('input[name="password"]').should('exist').type(value[1]).type('{enter}');
        cy.wait(3000);

        cy.url().should('include', '/dashboard');  //Add assertions as needed
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
      });
      
        cy.get('#logoutButton').click();  // Logout before the next iteration
    }
  })
   
  })
})