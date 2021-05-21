const CheckOutCompletePage = require('../pageobjects/checkOutComplete.page');

it('Testing CheckOutComplete Page display and back button', () => {

  CheckOutCompletePage.open();
  browser.pause(2000);
  expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
  expect(CheckOutCompletePage.backHomeBtn).toBeDisplayed();
  expect(CheckOutCompletePage.completeHeader).toBeDisplayed();
  expect(CheckOutCompletePage.infoOrder).toBeDisplayed();
  expect(CheckOutCompletePage.ponyImg).toBeDisplayed();
  CheckOutCompletePage.backHomeBtn.click();
  expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  browser.pause(2000);

})