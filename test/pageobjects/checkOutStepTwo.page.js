const CheckOutPage = require('./checkOut.page');
const Page = require('./page');

class CheckOutStepTwoPage extends Page {
   
    // CheckOutStepTwo Page Selectors

    get cancelBtn () { return $('#cancel') }
    get finishBtn () { return $('#finish') }
    

    open () {
        CheckOutPage.open();
        CheckOutPage.firstNameInput.setValue('Emiliano')
        CheckOutPage.lastNameInput.setValue('Jaime')
        CheckOutPage.zipCodeInput.setValue('2000')
        CheckOutPage.continueCheckOutBtn.click();
    }

    // Buttons actions
}

module.exports = new CheckOutStepTwoPage();