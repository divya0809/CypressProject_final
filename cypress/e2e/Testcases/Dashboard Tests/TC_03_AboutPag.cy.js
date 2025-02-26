import Common from '../../../support/Utility.js';
import AboutPage from '../../../support/Page Object/AboutPage.js'; 

describe('Construct Monitor', () => {
    it('should validate the active sites header and navigate to the about page',{retries: 1},() => {
        try {
             const com = new Common();

        com.loginProcess();


        // Validate the active sites header
        AboutPage.validateActiveSitesHeader();

        // Navigate to the about page
        AboutPage.clickAboutPageImage();
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});
