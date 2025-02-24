import 'cypress-xpath';
import Common from '../Common';
import MonitorPage from '../Page Object/POM_07_Addbuilding.js';

describe('Construct Monitor', () => {
    it('should perform the monitor actions',{retries: 1},() => {
        const com = new Common();
        com.loginProcess();
        cy.wait(3000);

        // Perform actions using MonitorPage methods
        MonitorPage.clickFirstCardContainer();
        MonitorPage.clickAddButton();
        MonitorPage.enterBuildingName('Building 02');
        cy.wait(3000);
        MonitorPage.enterScheduleFromDate('2025-02-13');
        MonitorPage.enterScheduleToDate('2025-03-23');
        MonitorPage.selectRadioOption();
        cy.wait(1000);
        MonitorPage.enterBuildupArea(50);
        cy.wait(1000);
        MonitorPage.clickSubmitButton();
    });
});
