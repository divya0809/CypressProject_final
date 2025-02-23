class GlobalPage {
    static toolIcon = '.tool > img';
    static globalPageElement = '#home > .container-fluid > .mt-2 > li';

    static clickToolIcon() {
        cy.get(GlobalPage.toolIcon).click();
    }
}

export default GlobalPage;