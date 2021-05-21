const CheckOutStepTwoPage = require('./checkOutStepTwo.page');
const Page = require('./page');

class CheckOutCompletePage extends Page {
   
    // CheckOutComplete Page Selectors

    get backHomeBtn () { return $('#back-to-products') }
    get completeHeader () { return $('.complete-header*=THANK YOU FOR YOUR ORDER') }
    get infoOrder () { return $('.complete-text*=Your order has been') }
    get ponyImg () { return $('.pony_express') }

    open () {
        CheckOutStepTwoPage.open();
        CheckOutStepTwoPage.finishBtn.click();
    }

    // Buttons actions
}

module.exports = new CheckOutCompletePage();