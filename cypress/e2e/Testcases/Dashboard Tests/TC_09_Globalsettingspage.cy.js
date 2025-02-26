import GlobalSettingsPage from '../../../support/Page Object/GlobalSettingsPage.js';
import Common from '../../../support/Utility.js';
describe('Construct Monitor', () => {
    it('should perform the monitor actions',{retries: 1},() => {
        try {
        const com = new Common();
        com.loginProcess();
        
        GlobalSettingsPage.clickToolIcon();
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
      
    });
});