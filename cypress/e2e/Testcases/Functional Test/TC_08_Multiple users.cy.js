import 'cypress-xpath';
describe("Read data from Excel file in Cypress", () => {
  it("should use Excel data to perform login tests",{retries: 0},() => {
      cy.readExcelFile("users01.xlsx").then((data) => {
          data.shift(); // Remove headers if present
          data.forEach(([Username, Password]) => {
              cy.visit(Cypress.env("baseUrl"));
              cy.viewport(1920, 1080);
              cy.wait(3000);
              
            //   cy.get('body').then(($body) => {
            //     if ($body.find('#acceptBtn').length > 0) {  // Check if the button exists
            //         cy.get('#acceptBtn').should('be.visible').then(($el) => {
            //             cy.log("Button is visible");
            //             cy.get('#declineBtn').click();
            //         });
            //     } else {
            //         cy.log("Button does not exist, skipping...");
            //     }
            // });
            
            //   cy.log("Accepting cookies");
        //cy.get('#acceptBtn').click(); // Handling cookies
 

              cy.get('#email').type(Username);
              cy.wait(2000);
              cy.log("email entered");
              cy.get('#exampleInputPassword1').type(Password).type('{Enter}');
              cy.wait(3000);
              cy.log("Entering OTP");
              
        cy.xpath("//div/input[1]").type(Cypress.env("OTP")).type('{Enter}');
       
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