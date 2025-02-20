/*import 'cypress-xpath';
it('Construct monitor', () => {
    cy.visit('http://10.1.0.83/#/login')

    cy.viewport(1920, 1080); // Full HD resolution


    cy.get('#acceptBtn').click()

      // Fetch email & password from Cypress config
      cy.get('#email').type(`${Cypress.env("email")}{Enter}`);
      cy.get('#exampleInputPassword1').type(`${Cypress.env("password")}{Enter}`);
      cy.wait(1000);
      
      cy.xpath("//div/input[1]").type(`${Cypress.env("OTP")}{Enter}`);
      

      //validation of the login page....

      cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");

    cy.get('.power > img').click()

    cy.get('.modal-footer > .btn-primary').click()

})
    */

/*import 'cypress-xpath';
import Common from "../Common"; 
//import common from 'mocha/lib/interfaces/common';
 
describe("Logout Test Case", () => {
    
    //const com = new Common();
    //beforeEach(() => {
        //Common.loginProcess(); 
   // });
 
   it("should log out successfully", () => {
        cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
        cy.viewport(1920, 1080);
        const com = new Common();
        com.loginProcess();
        cy.allure().feature('Logout');
        cy.allure().story('User logs out successfully');
        cy.allure().severity('critical');
 
        cy.allure().step('Click logout button');
        cy.get('.power > img').click();
        cy.wait(5000);
 
        cy.allure().step('Confirm logout');
        //cy.get('.modal-footer > .btn-primary').click();
        cy.xpath("//button[normalize-space()='Yes']").click();
    });
});
*/

import 'cypress-xpath';
import Common from "../Common"; 

describe("Logout Test Case", () => {

    it("should log out successfully", () => {
        cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
        cy.viewport(1920, 1080);

        const com = new Common();
        com.loginProcess();
       
        cy.get('.power > img').click();
        cy.xpath("//button[normalize-space()='Yes']").should('be.visible').click(); //assertion
        cy.wait(4000)

        // Assert that the user is redirected to the login page after logout
        cy.url().should('include', '/login');
    });
});
