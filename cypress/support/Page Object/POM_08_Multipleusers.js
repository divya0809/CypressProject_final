// import 'cypress-xpath';
// class MultipleUsers {
//     visit() {
//         cy.visit(Cypress.env("baseUrl"));
//         cy.viewport(1920, 1080);
//     }
    
//     enterEmail(Username) {
//         cy.get('#email').type(Username);
//         cy.wait(2000);
//     }
    
//     enterPassword(Password) {
//         cy.get('#exampleInputPassword1')  .should('be.visible')
//         .should('be.enabled').type(Password, { force: true }).type('{Enter}');

//     }
    
//     enterOTP() {
//         cy.xpath("//div/input[1]").type(Cypress.env("OTP")).type('{Enter}');
//         cy.wait(2000);
//     }
    
//     clickLoginButton() {
//         cy.get('.mb-4 > .btn').click();
//     }
    
//     verifySuccessfulLogin() {
//         cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
//     }
    
//     logout() {
//         cy.get('.power > img').click();
//         cy.xpath("//button[normalize-space()='Yes']").click();
//     }
// }

// export default new MultipleUsers();