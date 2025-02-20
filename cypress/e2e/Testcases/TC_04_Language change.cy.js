import 'cypress-xpath';
import Common from "../Common"; 
it('Construct monitor', () => {
  cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
  cy.viewport(1920, 1080);

  const com = new Common();
  com.loginProcess();
      
      cy.wait(3000);

      //validation of the login page....

      cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");

    cy.get('#dropdownMenuButton1 > img').click()
 
  //cy.xpath('//ul/li/b[contains(., "Deutsch")]').click(); // Assert that the text is as expected
  cy.wait(3000);
  cy.xpath('//ul/li/b[contains(.,"English")]').click(); // Assert that the text is as expected
 // cy.wait(3000);
  //cy.xpath("(//b[@class='ms-4'])[2]").click();

  cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");

})