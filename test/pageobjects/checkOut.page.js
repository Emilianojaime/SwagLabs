const CheckOut = require('./page');

class CheckOutPage extends Page {
   
    // CheckOut Page Selectors

    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('checkout-step-one.html');
    }

    // Buttons actions
}

module.exports = new CheckOutPage();