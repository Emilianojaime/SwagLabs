const CheckOutCompletePage = require('../pageobjects/checkOutComplete.page');

describe('Testing CheckOut Final Page Display :', () => {

  it('Testing CheckOutComplete Page display and back button', () => {

    CheckOutCompletePage.open();
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    expect(CheckOutCompletePage.backHomeBtn).toBeDisplayed();
    expect(CheckOutCompletePage.completeHeader).toBeDisplayed();
    expect(CheckOutCompletePage.infoOrder).toBeDisplayed();
    expect(CheckOutCompletePage.ponyImg).toBeDisplayed();
    CheckOutCompletePage.backHomeBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    
  })
})