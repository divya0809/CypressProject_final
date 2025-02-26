import Common from '../../../support/Common.js';
import MonitorPage from '../../../support/Page Object/POM_03_About.js'; 

describe('Construct Monitor', () => {
    it('should validate the active sites header and navigate to the about page',{retries: 1},() => {
        try {
             const com = new Common();

        com.loginProcess();
        cy.wait(3000);

        // Validate the active sites header
        MonitorPage.validateActiveSitesHeader();

        // Navigate to the about page
        MonitorPage.clickAboutPageImage();
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});
