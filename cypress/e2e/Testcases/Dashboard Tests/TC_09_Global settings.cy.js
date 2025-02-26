import GlobalPage from '../../../support/Page Object/POM_09_Globalsetting';
import Common from '../../../support/Common';
describe('Construct Monitor', () => {
    it('should perform the monitor actions',{retries: 1},() => {
        try {
        const com = new Common();
        com.loginProcess();
        cy.wait(3000);
        
        GlobalPage.clickToolIcon();
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
      
    });
});