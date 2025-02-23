import GlobalPage from '../Page Object/POM_09_Globalsetting';
import Common from '../Common';
describe('Construct Monitor', () => {
    it('should perform the monitor actions', () => {
        const com = new Common();
        com.loginProcess();
        cy.wait(3000);
        
        GlobalPage.clickToolIcon();
      
    });
});