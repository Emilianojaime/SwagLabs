const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckOutPage = require('../pageobjects/checkOut.page');
const CheckOutStepTwoPage = require('../pageobjects/checkOutStepTwo.page');
const CheckOutCompletePage = require('../pageobjects/checkOutComplete.page');

describe('Testing end to end user scenarios', () => {

  /* it('successful purchase process of 1 item', () => {
    InventoryPage.open();
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.btnCart.click();
    CartPage.checkOutBtn.click();
    CheckOutPage.firstNameInput.setValue('Emiliano');
    CheckOutPage.lastNameInput.setValue('Jaime');
    CheckOutPage.zipCodeInput.setValue('2000');
    CheckOutPage.continueCheckOutBtn.click();
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
    CheckOutStepTwoPage.finishBtn.click();
    expect(CheckOutCompletePage.backHomeBtn).toBeDisplayed();
    expect(CheckOutCompletePage.completeHeader).toBeDisplayed();
    expect(CheckOutCompletePage.infoOrder).toBeDisplayed();
    expect(CheckOutCompletePage.ponyImg).toBeDisplayed();
    CheckOutCompletePage.backHomeBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    browser.pause(2000);
    browser.reloadSession();
  })

  it('successful purchase process of 3 items', () => {
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
    CheckOutStepTwoPage.finishBtn.click();
    expect(CheckOutCompletePage.backHomeBtn).toBeDisplayed();
    expect(CheckOutCompletePage.completeHeader).toBeDisplayed();
    expect(CheckOutCompletePage.infoOrder).toBeDisplayed();
    expect(CheckOutCompletePage.ponyImg).toBeDisplayed();
    CheckOutCompletePage.backHomeBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    browser.pause(2000);
    browser.reloadSession();
  })

  it('Testing Cancel Punchase in checkoutStepOne Page', () => {
    InventoryPage.open();
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.itemSauceAddToCard.click();
    InventoryPage.btnCart.click();
    CartPage.checkOutBtn.click();
    CheckOutPage.firstNameInput.setValue('Emiliano');
    CheckOutPage.lastNameInput.setValue('Jaime');
    CheckOutPage.zipCodeInput.setValue('2000');
    CheckOutPage.cancelBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html'); // should return to the inventory page?
    browser.pause(2000);
    browser.reloadSession();
  })

  it('Testing Cancel Punchase in checkoutStepTwo Page', () => {
    InventoryPage.open();
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.itemSauceAddToCard.click();
    InventoryPage.btnCart.click();
    CartPage.checkOutBtn.click();
    CheckOutPage.firstNameInput.setValue('Emiliano');
    CheckOutPage.lastNameInput.setValue('Jaime');
    CheckOutPage.zipCodeInput.setValue('2000');
    CheckOutPage.continueCheckOutBtn.click();
    CheckOutStepTwoPage.cancelBtn.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(2000);
    browser.reloadSession();
  }) */


})