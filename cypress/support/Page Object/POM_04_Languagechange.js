class Languagechange {
    // Define selectors as class properties
    constructor() {
        this.activeSitesHeader = '.col-md-6 > .mb-3';
        this.languageDropdownButton = '#dropdownMenuButton1 > img';
        this.languageOption = (language) => `//ul/li/b[contains(., "${language}")]`;
        this.languageOption1 = "(//b[@class='ms-4'])[2]";
        this.languageOption2 = (language2) => `//ul/li/b[contains(., "${language2}")]`
    }
    // Method to validate the presence of the active sites header
    validateenglishText() {
        cy.get(this.activeSitesHeader).should('contain.text', 'Neilsoft - Active Construction Sites');
    }

    validateDuetschText() {
        cy.get(this.activeSitesHeader).should('contain.text', 'Neilsoft - Aktive Baustellen');
    }
    validateJapaneseText() {
        cy.get(this.activeSitesHeader).should('contain.text', 'Neilsoft - 活発な建設現場');
    }
    // Method to click on the language dropdown button
    clickLanguageDropdown() {
        cy.get(this.languageDropdownButton).click();
    }

    // Method to select a language from the dropdown
    selectLanguage(language) {
        cy.xpath(this.languageOption(language)).click();
    }

    selectLanguage1() {
        cy.xpath(this.languageOption1).click();
    }
    
    selectLanguage2(language2) {
        cy.xpath(this.languageOption2(language2)).click();
    }
}


export default Languagechange 
    
