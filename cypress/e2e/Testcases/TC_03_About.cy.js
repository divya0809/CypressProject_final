import Common from '../Common';
import MonitorPage from '../Page Object/POM_03_About.js'; 

describe('Construct Monitor', () => {
    it('should validate the active sites header and navigate to the about page', () => {
        const com = new Common();

        com.loginProcess();
        cy.wait(3000);

        // Validate the active sites header
        MonitorPage.validateActiveSitesHeader();

        // Navigate to the about page
        MonitorPage.clickAboutPageImage();
    });
});
