const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckOutPage = require('../pageobjects/checkOut.page');
const CheckOutStepTwoPage = require('../pageobjects/checkOutStepTwo.page');

describe('Testing Checkout Page Functionalities :', () => { 

  it('Testing Display Information 0 items', () => {
 
    CheckOutStepTwoPage.open();
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    expect(CheckOutStepTwoPage.paymentInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.paymentInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.itemTotal).toBeDisplayed();
    expect(CheckOutStepTwoPage.tax).toBeDisplayed();
    expect(CheckOutStepTwoPage.total).toBeDisplayed();

  })

  it('Testing Display Information with 1 item', () => {
 
    InventoryPage.open();
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.btnCart.click();
    CartPage.checkOutBtn.click();
    CheckOutPage.firstNameInput.setValue('Emiliano');
    CheckOutPage.lastNameInput.setValue('Jaime');
    CheckOutPage.zipCodeInput.setValue('2000');
    CheckOutPage.continueCheckOutBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    expect(InventoryPage.itemBackpackTitle).toBeDisplayed();
    expect(InventoryPage.itemBackPackDescription).toBeDisplayed();
    expect(InventoryPage.price2999).toBeDisplayed();
    expect(CheckOutStepTwoPage.paymentInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.paymentInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.itemTotal).toHaveTextContaining('29.99');
    expect(CheckOutStepTwoPage.tax).toHaveTextContaining('2.40');
    expect(CheckOutStepTwoPage.total).toHaveTextContaining('32.39');
    browser.reloadSession();

  })

  it('Testing Display Information with 2 items', () => {
 
    InventoryPage.open();
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.itemSauceAddToCard.click();
    InventoryPage.btnCart.click();
    CartPage.checkOutBtn.click();
    CheckOutPage.firstNameInput.setValue('Emiliano');
    CheckOutPage.lastNameInput.setValue('Jaime');
    CheckOutPage.zipCodeInput.setValue('2000');
    CheckOutPage.continueCheckOutBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    expect(InventoryPage.itemBackpackTitle).toBeDisplayed();
    expect(InventoryPage.itemBackPackDescription).toBeDisplayed();
    expect(InventoryPage.price2999).toBeDisplayed();
    expect(InventoryPage.itemSauceTitle).toBeDisplayed();
    expect(InventoryPage.itemSauceDescription).toBeDisplayed();
    expect(InventoryPage.price999).toBeDisplayed();
    expect(CheckOutStepTwoPage.paymentInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.paymentInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.itemTotal).toHaveTextContaining('39.98');
    expect(CheckOutStepTwoPage.tax).toHaveTextContaining('3.20');
    expect(CheckOutStepTwoPage.total).toHaveTextContaining('43.18');
    browser.reloadSession();

  })

  it('Testing Display Information with 3 items', () => {
 
    InventoryPage.open();
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.itemSauceAddToCard.click();
    InventoryPage.itemTshirtAddToCard.click();
    InventoryPage.btnCart.click();
    CartPage.checkOutBtn.click();
    CheckOutPage.firstNameInput.setValue('Emiliano');
    CheckOutPage.lastNameInput.setValue('Jaime');
    CheckOutPage.zipCodeInput.setValue('2000');
    CheckOutPage.continueCheckOutBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    expect(InventoryPage.itemBackpackTitle).toBeDisplayed();
    expect(InventoryPage.itemBackPackDescription).toBeDisplayed();
    expect(InventoryPage.price2999).toBeDisplayed();
    expect(InventoryPage.itemSauceTitle).toBeDisplayed();
    expect(InventoryPage.itemSauceDescription).toBeDisplayed();
    expect(InventoryPage.price999).toBeDisplayed();
    expect(InventoryPage.itemTshirtTitle).toBeDisplayed();
    expect(InventoryPage.itemTshirtDescription).toBeDisplayed();
    expect(InventoryPage.price1599).toBeDisplayed();
    expect(CheckOutStepTwoPage.paymentInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.paymentInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoTitle).toBeDisplayed();
    expect(CheckOutStepTwoPage.shippingInfoValue).toBeDisplayed();
    expect(CheckOutStepTwoPage.itemTotal).toHaveTextContaining('55.97');
    expect(CheckOutStepTwoPage.tax).toHaveTextContaining('4.48');
    expect(CheckOutStepTwoPage.total).toHaveTextContaining('60.45');

  })
})