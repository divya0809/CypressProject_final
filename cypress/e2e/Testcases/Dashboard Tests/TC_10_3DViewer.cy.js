import  Common  from '../../../support/Common.js';  // Assuming Common handles login
        
        describe('Construct Monitor', () => {
            it('should perform the monitor actions', { retries: 1 }, () => {
                try {
                const com = new Common();
                com.loginProcess();
                cy.get('.cube > img').click();
                cy.get('[style="font-size: larger; font-weight: bolder; text-align: center;"]').should("contain.text","Construction Elements");
            } catch (error) {
                cy.log('Unexpected error occurred:', error.message);
            }
            })
        })
