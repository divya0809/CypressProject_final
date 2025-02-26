import Common from '../../../support/Common.js';
import AboutPage from '../../../support/Page Object/AboutPage.js'; 

describe('Construct Monitor', () => {
    it('should validate the active sites header and navigate to the about page',{retries: 1},() => {
        try {
             const com = new Common();

        com.loginProcess();
        cy.wait(3000);

        // Validate the active sites header
        AboutPage.validateActiveSitesHeader();

        // Navigate to the about page
        AboutPage.clickAboutPageImage();
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});
