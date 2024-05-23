const loginLocators = require("./locators/LoginLocators")
const homelocators = require("./locators/HomeLocators")


// Home page methods
class HomePage {

  loginOption(){
      cy.get(homelocators.dropDownHomePage).click()
    }

    searchProduct(product) {
        cy.get(homelocators.search_product).type(product)
        cy.get(homelocators.search_product).type('{enter}');
        cy.xpath(homelocators.first_item_searched).should('be.visible', { timeout: 10000 });
        
    }

    selectFirstItem(){
        cy.xpath(homelocators.first_item_searched).click()
        cy.get(homelocators.add_cart_button).should('be.visible', { timeout: 10000 });

    }

    addProductToCart(){
        cy.get(homelocators.add_cart_button).click()
        cy.get(homelocators.checkout_success_popup).should('be.visible', {timeout: 10000})
    }
  
    accessCheckout() {
        cy.get(homelocators.checkout_success_popup).click()
        cy.get(homelocators.order_payment_label).should('be.visible', { timeout: 10000 }); 
    }
      
}
module.exports = new HomePage()