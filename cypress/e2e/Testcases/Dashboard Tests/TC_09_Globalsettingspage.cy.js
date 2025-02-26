import GlobalSettingsPage from '../../../support/Page Object/GlobalSettingsPage.js';
import Common from '../../../support/Common';
describe('Construct Monitor', () => {
    it('should perform the monitor actions',{retries: 1},() => {
        try {
        const com = new Common();
        com.loginProcess();
        cy.wait(3000);
        
        GlobalSettingsPage.clickToolIcon();
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
      
    });
});