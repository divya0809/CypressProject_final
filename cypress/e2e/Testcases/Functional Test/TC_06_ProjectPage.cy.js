import 'cypress-xpath';
import ProjectPage from "../../../support/Page Object/ProjectPage.js";
import Common from "../../../support/Utility.js"; 

describe('Add Project Test', () => {
    beforeEach(() => {
        const com = new Common();
        com.loginProcess(); // Assuming login is required

        
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
            cy.get(ProjectPage.projectList, { timeout: 10000 }) // Adjust timeout as needed
                  .should('contain', generatedName); 

            // Validate project exists in the list
            ProjectPage.validateProjectName(generatedName);
            
        });
    } catch (error) {
        cy.log('Unexpected error occurred:', error.message);
    }
    });
});


