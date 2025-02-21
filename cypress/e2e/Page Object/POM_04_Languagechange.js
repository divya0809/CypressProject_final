class Languagechange {
    // Define selectors as class properties
    constructor() {
        this.activeSitesHeader = '.col-md-6 > .mb-3';
        this.languageDropdownButton = '#dropdownMenuButton1 > img';
        this.languageOption = (language) => `//ul/li/b[contains(., "${language}")]`;
    }

    // Method to validate the presence of the active sites header
    validateActiveSitesHeader() {
        cy.get(this.activeSitesHeader).should('contain.text', 'Neilsoft - Active Construction Sites');
    }

    // Method to click on the language dropdown button
    clickLanguageDropdown() {
        cy.get(this.languageDropdownButton).click();
    }

    // Method to select a language from the dropdown
    selectLanguage(language) {
        cy.xpath(this.languageOption(language)).click();
    }
}

export default Languagechange 
    
