import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
import checkoutPage from "../../pages/checkoutPage";


//Realize Payment Methods in Checkout
When("I fill the payment information", () => {
    const userName = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");
    checkoutPage.validatePaymentMethods();
    checkoutPage.fillInformationPayment(userName,password);
})

//Validate the success checkout
Then("I validate if my purchase was made successfully", () => {
    checkoutPage.validateCheckoutSuccessfully();
    cy.screenshot("Success Checkout")
})


