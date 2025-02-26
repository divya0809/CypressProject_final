import 'cypress-xpath';
import Common from '../../../support/Common.js';
import Buildingpage from '../../../support/Page Object/Buildingpage.js';

describe('Construct Monitor', () => {
    it('should perform the monitor actions',{retries: 1},() => {
        try {
        const com = new Common();
        com.loginProcess();
        cy.wait(3000);

        // Perform actions using MonitorPage methods
        Buildingpage.clickFirstCardContainer();
        Buildingpage.clickAddButton();
        Buildingpage.enterBuildingName('Building 04');
        cy.wait(3000);
        Buildingpage.scheduleFrom('2025-02-13');
        Buildingpage.scheduleTo('2025-03-23');
        Buildingpage.selectRadioOption();
        cy.wait(1000);
        Buildingpage.enterBuildupArea(50);
        cy.wait(1000);
        Buildingpage.clickSubmitButton();
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});
