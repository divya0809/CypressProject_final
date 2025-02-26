/*import 'cypress-xpath';
import Common from '../../../support/Common.js';
import Buildingpage from '../../../support/Page Object/Buildingpage.js';

describe('Construct Monitor', () => {
    it('should perform the monitor actions',{retries: 1},() => {
        try {
        const com = new Common();
        com.loginProcess();
       
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
*/

import 'cypress-xpath';
import Common from '../../../support/Utility.js';
import Buildingpage from '../../../support/Page Object/Buildingpage.js';

describe('Construct Monitor', () => {
    it('should perform the monitor actions', { retries: 1 }, () => {
        try {
            const com = new Common();
            com.loginProcess();

            // Perform actions using MonitorPage methods
            Buildingpage.clickFirstCardContainer();

            // Wait for Add button to be visible and click
            cy.get(Buildingpage.addButton, { timeout: 10000 }).should('be.visible').click();

            // Enter building details
            cy.get(Buildingpage.buildingNameInput, { timeout: 10000 }).should('be.visible').type('Building 05');

            // Wait for Schedule From input and enter date
            cy.get(Buildingpage.scheduleFromInput, { timeout: 10000 }).should('be.visible').type('2025-03-16');

            // Wait for Schedule To input and enter date
            cy.get(Buildingpage.scheduleToInput, { timeout: 10000 }).should('be.visible').type('2025-04-23');

            // Wait for radio option to be clickable
            cy.get(Buildingpage.radioOption, { timeout: 10000 }).should('be.visible').click();

            // Wait for Buildup Area input and enter value
            cy.get(Buildingpage.buildupAreaInput, { timeout: 10000 }).should('be.visible').type('50');

            // Wait for Submit button and click
            cy.get(Buildingpage.submitButton, { timeout: 10000 }).should('be.visible').click();

        } catch (error) {
            cy.log('Unexpected error occurred:', error.message);
        }
    });
});
