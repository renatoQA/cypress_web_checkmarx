class HomeLocators {

    // Account and list
    dropDownHomePage = "#menuUser"


    //Marketplace
     search_product = "[name='mobile_search']"
     first_item_searched = "//a[@class='productName ng-binding']"
     add_cart_button = "[name='save_to_cart']"
     checkout_success_popup = "#checkOutPopUp"
     order_payment_label = "#orderPayment"
     
 }
 
 module.exports = new HomeLocators();