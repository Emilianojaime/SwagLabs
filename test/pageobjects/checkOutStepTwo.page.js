const CheckOutPage = require('./checkOut.page');
const Page = require('./page');

class CheckOutStepTwoPage extends Page {
   
    // CheckOutStepTwo Page Selectors

    get cancelBtn () { return $('#cancel') };
    get finishBtn () { return $('#finish') };
    get paymentInfoTitle () { return $('.summary_info_label=Payment Information:') };
    get paymentInfoValue () { return $('.summary_value_label=SauceCard #31337') };
    get shippingInfoTitle () { return $('.summary_info_label=Shipping Information:') };
    get shippingInfoValue () { return $('.summary_value_label=FREE PONY EXPRESS DELIVERY!') };
    get itemTotal () { return $('.summary_subtotal_label*=Item total') };
    get tax () { return $('.summary_tax_label*=Tax:') };
    get total () { return $('.summary_total_label*=Total:') };
    

    open () {
        CheckOutPage.open();
        CheckOutPage.firstNameInput.setValue('Emiliano');
        CheckOutPage.lastNameInput.setValue('Jaime');
        CheckOutPage.zipCodeInput.setValue('2000');
        CheckOutPage.continueCheckOutBtn.click();
    }
}

module.exports = new CheckOutStepTwoPage();