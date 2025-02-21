/*const usedPasswords = new Set(); // Store previously used passwords

function generateUniquePassword() {
    let newPassword;
    do {
        newPassword = generateRandomPassword();
    } while (usedPasswords.has(newPassword)); // Ensure uniqueness

    usedPasswords.add(newPassword); // Store the new password
    return newPassword;
}

function generateRandomPassword() {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    

    // Ensure at least one character from each category
    const randomUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
    const randomLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    

    // Generate remaining characters randomly to make a length between 8-15
    const allChars = upperCase + lowerCase + numbers + "@";
    const remainingLength = Math.floor(Math.random() * 8) + 4; // Ensures total length is between 8-15

    let password = randomUpper + randomLower + randomNumber + "@";

    for (let i = 0; i < remainingLength; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password.split('').sort(() => 0.5 - Math.random()).join(''); // Shuffle password for randomness
}

class PasswordHelper {
    setNewPassword() {
        const newPassword = generateUniquePassword();
        cy.get('#newpassword').type(`${newPassword}{enter}`);
        cy.wrap(newPassword).as('lastGeneratedPassword'); // Store password for later use
        cy.get('#reenterpassword').type(`${newPassword}{enter}`);
        cy.wrap(newPassword).as('lastGeneratedPassword');
    }
}

export default new PasswordHelper();


*/

class ChangePassword {
    generateUniquePassword() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
        let password = Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        return password;
    }

    setNewPassword() {
        const newPassword = this.generateUniquePassword();
        cy.get('#newpassword').type(`${newPassword}{enter}`);
        cy.get('#reenterpassword').type(`${newPassword}{enter}`);
        cy.wrap(newPassword).as('lastGeneratedPassword'); // Store password for later use

        // Call the Cypress task to update the config file
        cy.task('updateConfig', { newPassword }).then((message) => {
            cy.log(message);
        });
    }
}

export default new ChangePassword();