/*/// <referance types="cypress"/>
import 'cypress-xpath';
import Common from "../Common"; 
//import Login from"..//PageObject/loginpage.js";
import newpassword from "../PageObject/changepassword.js";

    it("should log in using credentials from config", () => {
        cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
        cy.viewport(1920, 1080);

        const com = new Common();
        com.loginProcess();
        cy.wait(3000);
      cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");

      //changepassword
      cy.get('.user > img').click();
      cy.get('#exampleModalLabel').should("contain.text", "Change Password");
      cy.get('#oldpassword').type(`${Cypress.env("Password")}{Enter}`);

      cy.get('@lastGeneratedPassword').then((newPassword) => {
        cy.log('New Password:', newPassword);
    });
    
      
      cy.get('.mb-1').click();

       cy.url().should('include', '/login');

    });

  */
/*
/// <reference types="cypress"/>
import 'cypress-xpath';
import Common from "../Common"; 
import newpassword from "../PageObject/changepassword.js";

it("should log in using credentials from config and change password", () => {
    cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
    cy.viewport(1920, 1080);

    const com = new Common();
    com.loginProcess();
    cy.wait(3000);
    cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");

    // Change password
    cy.get('.user > img').click();
    cy.get('#exampleModalLabel').should("contain.text", "Change Password");
    cy.get('#oldpassword').type(`${Cypress.env("password")}{Enter}`);

    newpassword.setNewPassword(); // Generates a new password and types it

    cy.get('@lastGeneratedPassword').then((newPassword) => {
        cy.log('New Password:', newPassword);

        
        cy.task('updateConfig', { newPassword }).then(() => {
            cy.log('Password updated in Cypress config');
        });
    });

    cy.get('@lastGeneratedPassword').then((newPassword) => {
      cy.log('Regenerated Password:', newPassword);

      
      cy.task('updateConfig', { newPassword }).then(() => {
          cy.log('Re generated Password updated in Cypress config');
      });
  });
    

    cy.get('.mb-1').click();
    
});

*/

// <reference types="cypress"/>
import 'cypress-xpath';
import Common from "../Common.js"; 
import newpassword from "../Page Object/POM_05_Passwordchange.js"; // Ensure correct case

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'backdrop')")) {
      return false; 
  }
});

it("should log in using credentials from config and change password", () => {
    const com = new Common();
    com.loginProcess();
    cy.wait(3000);
    cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");

    // Change password
    cy.get('.user > img').click();
    cy.get('#exampleModalLabel').should("contain.text", "Change Password");
    cy.wait(1000);
    cy.get('#oldpassword').type(`${Cypress.env("password")}{enter}`);

    // Generate and set a new password
    newpassword.setNewPassword();

    // Confirm password change
    cy.get('.mb-1').click({ force: true });
    cy.url().should('include', '/login');
});



