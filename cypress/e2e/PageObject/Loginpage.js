
class Login {
    clickAccept() {
        cy.get('#acceptBtn').click();
    }
 
    setemail(email) {
        cy.get('#email').type(email).type('{Enter}');
    }
 
    setPassword(password) {
        cy.get('#exampleInputPassword1').type(password).type('{Enter}');
    }

    setOTP(OTP) {
        cy.xpath("//div/input[1]").type(`${Cypress.env("OTP")}{Enter}`);
    }
 
    verifyLogin() {
        cy.get('.col-md-6 > .mb-3').should("contain.text", "Neilsoft - Active Construction Sites");
    }
}
 
export default Login; 
