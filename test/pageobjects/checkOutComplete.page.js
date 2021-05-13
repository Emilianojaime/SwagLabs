const CheckOutComplete = require('./page');

class CheckOutCompletePage extends Page {
   
    // CheckOutComplete Page Selectors

    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('checkout-complete.html');
    }

    // Buttons actions
}

module.exports = new CheckOutCompletePage();