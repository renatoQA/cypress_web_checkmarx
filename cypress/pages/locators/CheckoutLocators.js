class CheckoutLocators {

    // Account and list
    next_button = "#next_btn"
    master_card_img = "//img[@alt='Master credit']"
    safepay_username = "[name='safepay_username']"
    safepay_password = "[name='safepay_password']"
    pay_button = "#pay_now_btn_SAFEPAY"
    label_success_checkout = "//span[@translate='Thank_you_for_buying_with_Advantage']"


 }
 
 module.exports = new CheckoutLocators();