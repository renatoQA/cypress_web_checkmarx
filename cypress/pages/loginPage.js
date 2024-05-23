const loginLocators = require("./locators/LoginLocators")
const homelocators = require("./locators/HomeLocators")

// Login page methods
class LoginPage {
    loginUserName(username) {
        cy.get(loginLocators.login_username).type(username)
    }
    loginPassword(password) {
        cy.get(loginLocators.login_password).type(password)
    }
    loginSubmitBtn() {
        cy.get(loginLocators.signIn_button).click()
    }
    loginSuccessfully(){
        cy.get(homelocators.search_button).should('be.visible', { timeout: 10000 });
    }
}

module.exports = new LoginPage()