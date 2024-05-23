const checkoutLocators = require("./locators/CheckoutLocators")


// Checkout page methods
class CheckoutPage {
    validatePaymentMethods() {
        cy.get(checkoutLocators.next_button).click()
        cy.xpath(checkoutLocators.master_card_img).should('be.visible', { timeout: 10000 });
    }
    fillInformationPayment(username,password){
        cy.get(checkoutLocators.safepay_username).clear()
        cy.get(checkoutLocators.safepay_username).type(username)
        cy.get(checkoutLocators.safepay_password).clear()
        cy.get(checkoutLocators.safepay_password).type(password)
        cy.get(checkoutLocators.pay_button).click()
    }

    validateCheckoutSuccessfully(){
        cy.xpath(checkoutLocators.label_success_checkout).should('be.visible', { timeout: 10000 });
    }
}

module.exports = new CheckoutPage()