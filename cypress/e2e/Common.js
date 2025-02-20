// cypress/support/common.js
import 'cypress-xpath';

 
class Common {
    loginProcess() {
        cy.log("Starting Login Process");
 
        //cy.visit(Cypress.env("baseUrl")); // Base URL from env config
        //cy.viewport(1920, 1080);
 
        cy.log("Accepting cookies");
        cy.get('#acceptBtn').click(); // Handling cookies
 
        cy.log("Entering valid email and password");
        cy.get('#email').type(Cypress.env("email")).type('{Enter}');
        cy.get('#exampleInputPassword1').type(Cypress.env("password")).type('{Enter}');
 
        cy.wait(2000);
 
        cy.log("Entering OTP");
        cy.xpath("//div/input[1]").type(Cypress.env("OTP")).type('{Enter}');
        cy.wait(5000);
        cy.get('.mb-4 > .btn').click();
 
 
        cy.log("Verifying successful login");
        cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
       // cy.url().should('include', '/login');  //assertion
        cy.wait(3000);
    }
}
 
export default Common; // Exporting an instance for direct uses