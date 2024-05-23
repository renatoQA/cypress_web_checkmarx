import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";


// SearchProduct
When("I search for an item called {string}", (product) => {
    HomePage.searchProduct(product);
});

//SelectProducts
When("I add the first item to the cart", () => {
    HomePage.selectFirstItem();
    HomePage.addProductToCart();
});

//CheckoutProcess
When("I proceed to checkout", () => {
    HomePage.accessCheckout();
})
