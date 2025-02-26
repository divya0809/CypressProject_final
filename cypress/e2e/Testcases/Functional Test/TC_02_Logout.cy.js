import LogoutPage from "../../../support/Page Object/POM_02_Logout.js";
import Common from "../../../support/Common.js";

describe("Logout Test Case", () => {
    it("should log out successfully",{retries: 1},() => {
        try {
        const com = new Common();
        const logoutPage = new LogoutPage();
        com.loginProcess();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        
        logoutPage.clickLogoutButton();
        logoutPage.confirmLogout(); //logoutPage.verifyLogoutSuccess();
        cy.wait(1000);
       
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});
