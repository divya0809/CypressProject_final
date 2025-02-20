import 'cypress-xpath';
import Common from "../Common"; 
it('Construct monitor', () => {
  cy.visit("http://10.1.0.83/#/login"); // Base URL from env config
  cy.viewport(1920, 1080);

  const com = new Common();
  com.loginProcess();
      
      cy.wait(3000);

      cy.get('.col-md-9 > .btn').click()
})