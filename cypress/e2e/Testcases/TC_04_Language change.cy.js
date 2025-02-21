/*import 'cypress-xpath';
import Common from "../Common"; 
it('Construct monitor', () => {
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
*/

// cypress/e2e/your_test_file.js

import 'cypress-xpath';
import Common from '../Common';
import Languagechange from '../Page Object/POM_04_Languagechange.js';

describe('Construct Monitor', () => {
    it('should validate the active sites header and change the language', () => {
        const com = new Common();
        const languageChange = new Languagechange(); // Create an instance of Languagechange

        com.loginProcess();
        cy.wait(3000);

        // Validate the active sites header
        languageChange.validateActiveSitesHeader();

        // Open the language dropdown
        languageChange.clickLanguageDropdown();

        // Wait for the dropdown to open
        cy.wait(1000);

        // Select 'English' from the dropdown
        languageChange.selectLanguage('English');

        // Wait for the page to reload or update
        cy.wait(3000);

        // Validate the active sites header again to ensure language change
        languageChange.validateActiveSitesHeader();
    });
});
