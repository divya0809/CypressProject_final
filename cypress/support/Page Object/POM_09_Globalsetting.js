class GlobalPage {
    static toolIcon = '.tool > img';
    

    static clickToolIcon() {
        cy.get(GlobalPage.toolIcon).click();
    }
}

export default GlobalPage;