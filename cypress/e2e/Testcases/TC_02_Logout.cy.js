import LogoutPage from "../Page Object/POM_02_Logout.js";
import Common from "../Common.js";

describe("Logout Test Case", () => {
    it("should log out successfully", () => {
        const com = new Common();
        const logoutPage = new LogoutPage();
        com.loginProcess();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        
        logoutPage.clickLogoutButton();
        logoutPage.confirmLogout();
        cy.wait(3000);
        //logoutPage.verifyLogoutSuccess();
    });
});
