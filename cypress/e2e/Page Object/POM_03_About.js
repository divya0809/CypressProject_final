// cypress/pageObjects/MonitorPage.js

class MonitorPage {
    // Static getters for selectors
    static get activeSitesHeader() {
        return '.col-md-6 > .mb-3';
    }

    static get aboutPageImage() {
        return '.aboutpage > img';
    }

    // Method to validate the presence of the active sites header
    static validateActiveSitesHeader() {
        cy.get(MonitorPage.activeSitesHeader).should('contain.text', 'Neilsoft - Active Construction Sites');
    }

    // Method to click on the about page image
    static clickAboutPageImage() {
        cy.get(MonitorPage.aboutPageImage).click();
    }
}

export default MonitorPage;

