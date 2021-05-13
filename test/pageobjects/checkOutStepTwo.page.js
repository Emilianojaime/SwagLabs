const CheckOutStepTwo = require('./page');

class CheckOutStepTwoPage extends Page {
   
    // CheckOutStepTwo Page Selectors

    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('checkout-step-two.html');
    }

    // Buttons actions
}

module.exports = new CheckOutStepTwoPage();