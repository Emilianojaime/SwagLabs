const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page')
const CheckOutPage = require('../pageobjects/checkOut.page');
const CheckoutStepTwoPage = require('../pageobjects/checkoutStepTwo.page');
const checkOutCompletePage = require('../pageobjects/checkOutComplete.page');

describe('Testing Selectors for All PageObjets Files', () => {

  it('Testing Cart Page selectors', () => {

    CartPage.openChargeCart();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    expect(CartPage.backPackTitle).toExist();
    expect(CartPage.sauceTitle).toExist();
    expect(CartPage.tShirtTitle).toExist();
    expect(CartPage.removeBtnBackPack).toExist();
    expect(CartPage.removeBtnSauce).toExist();
    expect(CartPage.removeBtnTshirt).toExist();
    expect(CartPage.continueBtn).toExist();
    expect(CartPage.checkOutBtn).toExist();
  })

  it('Testing CheckOut Page selectors', () => {

    CheckOutPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    expect(CheckOutPage.firstNameInput).toExist();
    expect(CheckOutPage.lastNameInput).toExist();
    expect(CheckOutPage.zipCodeInput).toExist();
    expect(CheckOutPage.cancelBtn).toExist();
    expect(CheckOutPage.continueCheckOutBtn).toExist();
    browser.pause(2000);

  })

  it('Testing CheckOutStepTwo Page selectors', () => {

    CheckoutStepTwoPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
    expect(CheckoutStepTwoPage.cancelBtn).toExist();
    expect(CheckoutStepTwoPage.finishBtn).toExist();
    browser.pause(2000);

  })

  it('Testing CheckOutComplete Page selectors', () => {

    checkOutCompletePage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    expect(checkOutCompletePage.backHomeBtn).toExist();
    browser.pause(2000);

  })
});