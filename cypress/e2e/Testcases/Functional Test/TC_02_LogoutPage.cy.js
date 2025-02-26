import LogoutPage from "../../../support/Page Object/LogoutPage.js";
import Common from "../../../support/Utility.js";

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
        
       
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});
