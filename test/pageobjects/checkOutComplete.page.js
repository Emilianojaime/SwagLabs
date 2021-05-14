const CheckOutStepTwoPage = require('./checkOutStepTwo.page');
const Page = require('./page');

class CheckOutCompletePage extends Page {
   
    // CheckOutComplete Page Selectors

    get backHomeBtn () { return $('#back-to-products') }

    open () {
        CheckOutStepTwoPage.open();
        CheckOutStepTwoPage.finishBtn.click();
    }

    // Buttons actions
}

module.exports = new CheckOutCompletePage();