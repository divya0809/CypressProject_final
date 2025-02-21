class ProjectPage {
    static generateUniqueProjectName() {
        return cy.get('.card-title.mt-4').then(($projects) => {
            let existingProjects = $projects.map((index, el) => Cypress.$(el).text().trim()).get();

            let projectName;
            do {
                projectName = `Project${Math.floor(1000 + Math.random() * 9000)}`; // Generate a random name
            } while (existingProjects.includes(projectName)); // Ensure uniqueness
            cy.get('.btn.me-3 > .bi').click();
            // Enter the unique project name in the input field
            cy.xpath("//input[@id='projectName1']").type(projectName);
            
            return cy.wrap(projectName); // Return the generated name for verification if needed
        });
    }

    static generateScheduleDates() {
        // Generate a random start date within the next year
        let startDate = new Date();
        startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 365)); // Random day within 1 year

        // Generate an end date exactly 6 months after the start date
        let endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 6);

        // Format dates as YYYY-MM-DD (Cypress requires this format for date inputs)
        let scheduleFrom = startDate.toISOString().split('T')[0];
        let scheduleTo = endDate.toISOString().split('T')[0];

        cy.log(`Generated Schedule From: ${scheduleFrom}`);
        cy.log(`Generated Schedule To: ${scheduleTo}`);

        cy.xpath("//input[@id='scheduleForm']").clear().type(scheduleFrom);
        cy.xpath("//input[@id='scheduleTo']").clear().type(scheduleTo);

        
    }

    static setBuildupArea() {
        const buildupAreaValue = "50000";
        cy.xpath("//input[@id='buildupArea']").clear().type(buildupAreaValue);
    }

    static clickCreateProjectButton() {
        cy.xpath("//div[@class='form-group mt-4 mb-1']").click();
    }

    static validateProjectName(generatedName) {
        cy.get('.col-md-6 > h3')
        .invoke('text')
        .should('contain', generatedName);
    }
    

   
}

export default ProjectPage;
