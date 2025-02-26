import 'cypress-xpath';
import Common from '../../../support/Utility.js';
import Languagechange from '../../../support/Page Object/Languagechangepage.js';

describe('Construct Monitor', () => {
    it('should validate the active sites header and change the language',{retries: 1},() => {
      try {
        const com = new Common();
        const languageChange = new Languagechange(); // Create an instance of Languagechange
        com.loginProcess();

        languageChange.clickLanguageDropdown();

        // Wait for the dropdown to open
        cy.wait(1000);
        languageChange.selectLanguage('English');
        languageChange.validateenglishText();
        languageChange.clickLanguageDropdown();
        languageChange.selectLanguage1();
        languageChange.validateJapaneseText();
        languageChange.clickLanguageDropdown();
        languageChange.selectLanguage2('Deutsch');
        languageChange.validateDuetschText();
      } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
       
    });
});
