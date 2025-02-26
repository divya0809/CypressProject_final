/// <reference types="cypress"/>
import 'cypress-xpath';
import Loginpage from "../../../support/Page Object/Loginpage.js";
 
describe("Login page",() => {
  it("should log in using credentials from config",{retries: 1},() => {
    const login = new Loginpage(); 
    cy.visit("http\://10.1.0.83/\#/") // Visit login page
      cy.viewport(1920, 1080) // Full HD resolution
      .then(() => {
        cy.log('Visited login page successfully');
      });

    
    cy.then(() => {
      login.clickAccept();
    }).then(() => {
      cy.log('Accepted cookies successfully');
    });

    
    cy.then(() => {
      if (!Cypress.env("email")) {
        throw new Error('Email is not set in Cypress environment variables');
      }
      login.setemail(Cypress.env("email"));
    }).then(() => {
      cy.log('Entered email successfully');
    });

    
    cy.then(() => {
      if (!Cypress.env("password")) {
        throw new Error('Password is not set in Cypress environment variables');
      }
      login.setPassword(Cypress.env("password"));
    }).then(() => {
      cy.log('Entered password successfully');
    });

    cy.wait(1000);

   
    cy.then(() => {
      if (!Cypress.env("OTP")) {
        throw new Error('OTP is not set in Cypress environment variables');
      }
      login.setOTP(Cypress.env("OTP"));
    }).then(() => {
      cy.log('Entered OTP successfully');
    });

    // Validation of the login page
    
    cy.then(() => {
      login.verifyLogin();
    }).then(() => {
      cy.log('Login verified successfully');
    });
  });
});
