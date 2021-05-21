const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckOutPage = require('../pageobjects/checkOut.page');
const CheckOutStepTwoPage = require('../pageobjects/checkOutStepTwo.page');
const CheckOutCompletePage = require('../pageobjects/checkOutComplete.page');
const assert = require('assert')

describe('Testing performance differences between users', () => {

  beforeAll(() => {
    browser.enablePerformanceAudits()
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
    

    
   /*  let metrics = browser.getMetrics()
    assert.ok(metrics.speedIndex < 1500) // check that speedIndex is below 1.5ms

    let score = browser.getPerformanceScore() // get Lighthouse Performance score
    assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher


    console.log(browser.getMetrics());
    console.log(browser.getPerformanceScore()); */
  })

  /* afterAll(() => {
    browser.disablePerformanceAudits()
  }) */

})