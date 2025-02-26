/// <reference types="cypress" />
import 'cypress-xpath';
import Login from "../../../support/Page Object/POM_01_Loginpage.js";
import LogoutPage from "../../../support/Page Object/POM_02_Logout.js";
import Common from "../../../support/Common.js";

describe("Login & Logout Test Suite", () => {
    const login = new Login();
    const logoutPage = new LogoutPage();
    const com = new Common();

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            cy.log("Ignoring uncaught exception:", err.message);
            return false;
        });
    });

    it("User should log in successfully", { retries: 1 }, () => {
        cy.visit("http://10.1.0.83/#/"); 
        cy.viewport(1920, 1080);
        cy.log('Visited login page successfully');

        login.clickAccept();
        cy.log('Accepted cookies successfully');

        cy.then(() => {
            if (!Cypress.env("email")) throw new Error('Email is missing in Cypress environment variables');
            login.setemail(Cypress.env("email"));
        }).then(() => cy.log('Entered email successfully'));

        cy.then(() => {
            if (!Cypress.env("password")) throw new Error('Password is missing in Cypress environment variables');
            login.setPassword(Cypress.env("password"));
        }).then(() => cy.log('Entered password successfully'));

        cy.wait(1000);

        cy.then(() => {
            if (!Cypress.env("OTP")) throw new Error('OTP is missing in Cypress environment variables');
            login.setOTP(Cypress.env("OTP"));
        }).then(() => cy.log('Entered OTP successfully'));

        login.verifyLogin();
        cy.log('Login verified successfully');
    });
  
    it("User should log out successfully", { retries: 1 }, () => {
        com.loginProcess(); // Using common login process

        logoutPage.clickLogoutButton();
 
        logoutPage.confirmLogout();
        cy.wait(1000);
        cy.log('User logged out successfully');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    after(() => {
       
    
        cy.log("Login & Logout Test Suite Execution Completed.");
    });
});