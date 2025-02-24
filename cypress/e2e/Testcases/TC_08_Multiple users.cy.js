import 'cypress-xpath';
/*describe("Read data from Excel file in Cypress", () => {
  it("should use Excel data to perform login tests", () => {
    cy.readExcelFile("users01.xlsx").then((data) => {
      data.forEach((user) => {
        cy.visit(Cypress.env("baseUrl")); 
        cy.viewport(1920, 1080);
 
        cy.get('#email').type(user.Username);
        cy.get('#exampleInputPassword1').type(user.Password).type('{Enter}');
        
        cy.wait(2000);
       
        cy.log("Entering OTP");
        cy.xpath("//div/input[1]").type(Cypress.env("OTP")).type('{Enter}');
        cy.wait(3000);
        cy.get('.mb-4 > .btn').click();

        // Add assertions based on expected outcomes
        cy.log("Verifying successful login");
        cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        })
        cy.get('.power > img').click();
        cy.xpath("//button[normalize-space()='Yes']").click();
      });
    });
   
  });
});*/
describe("Read data from Excel file in Cypress", () => {
  it("should use Excel data to perform login tests",{retries: 1},() => {
      cy.readExcelFile("users01.xlsx").then((data) => {
          data.shift(); // Remove headers if present
          data.forEach(([Username, Password]) => {
              cy.visit(Cypress.env("baseUrl"));
              cy.viewport(1920, 1080);

              cy.get('#email').type(Username);
              cy.get('#exampleInputPassword1').type(Password).type('{Enter}');
              cy.log("Entering OTP");
              cy.wait(2000);
        cy.xpath("//div/input[1]").type(Cypress.env("OTP")).type('{Enter}');
        cy.wait(3000);
        cy.get('.mb-4 > .btn').click();

        // Add assertions based on expected outcomes
        cy.log("Verifying successful login");
        cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        })
        cy.get('.power > img').click();
        cy.xpath("//button[normalize-space()='Yes']").click();
      });
    });
          });
      });
