import 'cypress-xpath';
import ProjectPage from "../../../support/Page Object/POM_06_Addproject.js";
import Common from "../../../support/Common.js"; 

describe('Add Project Test', () => {
    beforeEach(() => {
        const com = new Common();
        com.loginProcess(); // Assuming login is required

        cy.wait(3000); // Wait for login to complete
    });

    it('Should add a new unique project with random schedule dates',{retries: 1},() => {
        try {
             ProjectPage.generateUniqueProjectName().then((generatedName) => {
            cy.log(`Generated Project Name: ${generatedName}`);
            

            // Fill project details
           // ProjectPage.generateUniqueProjectName();
            ProjectPage.generateScheduleDates();
            
            ProjectPage.setBuildupArea();

            // Click the create project button
            ProjectPage.clickCreateProjectButton();

            // Wait for dashboard update
            cy.wait(3000);

            // Validate project exists in the list
            ProjectPage.validateProjectName(generatedName);
            
        });
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});


