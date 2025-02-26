class Buildingpage {
    // Define selectors as static properties
    static firstCardContainer = ':nth-child(1) > .card-body';
    static addButton = '.col-md-9 > .btn';
    static buildingNameInput = '#buildingName';
    static scheduleFromInput = '#scheduleForm';
    static scheduleToInput = '#scheduleTo';
    static radioOption = '#inlineRadio2';
    static buildupAreaInput = '#buildupArea';
    static submitButton = ':nth-child(6) > .btn';

    // Method to click the first card container
    static clickFirstCardContainer() {
        cy.get(this.firstCardContainer).click();
    }

    // Method to click the add button
    static clickAddButton() {
        cy.get(this.addButton).click();
    }

    // Method to enter the building name
    static enterBuildingName(name) {
        cy.get(this.buildingNameInput).type(name);
    }

    // Method to enter the schedule from date
    static enterScheduleFromDate(date) {
        cy.get(this.scheduleFromInput).type(date);
    }

    // Method to enter the schedule to date
    static enterScheduleToDate(date) {
        cy.get(this.scheduleToInput).type(date);
    }

    // Method to select the radio option
    static selectRadioOption() {
        cy.get(this.radioOption).click();
    }

    // Method to enter the buildup area
    static enterBuildupArea(area) {
        cy.get(this.buildupAreaInput).type(area);
    }

    // Method to click the submit button
    static clickSubmitButton() {
        cy.get(this.submitButton).click();
    }
}

export default Buildingpage;
