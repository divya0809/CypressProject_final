class LogoutPage {
    constructor() {
        this.logoutButton = '.power > img';
        this.confirmLogoutButton = "//button[normalize-space()='Yes']";
    }

    clickLogoutButton() {
        cy.get(this.logoutButton).click();
    }

    confirmLogout() {
        cy.xpath(this.confirmLogoutButton).click();
    }

    //verifyLogoutSuccess() {
       // cy.url().should('include', '/login');
    //}
}

export default LogoutPage;
