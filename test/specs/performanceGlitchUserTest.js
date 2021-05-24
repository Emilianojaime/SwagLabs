const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckOutPage = require('../pageobjects/checkOut.page');
const CheckOutStepTwoPage = require('../pageobjects/checkOutStepTwo.page');
const CheckOutCompletePage = require('../pageobjects/checkOutComplete.page');

describe('Testing performance differences between users :', () => {

  let timeStandar3Items
  let timeGlitch3Items
  let timeStandarCancelPunchase
  let timeGlitchCancelPunchase

  it('Measure testing Cancel Punchase in checkoutStepTwo Page (standar User)', () => {

    LoginPage.open();
    LoginPage.inputUsername.setValue('standard_user');
    LoginPage.inputPassword.setValue('secret_sauce');
    LoginPage.login();
    let begin=Date.now();
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
    browser.reloadSession();
    let end= Date.now();
    timeStandarCancelPunchase=(end-begin)/1000+"secs";

  }) 

  it('Measure testing Cancel Punchase in checkoutStepTwo Page (glitch User)', () => {

    LoginPage.open();
    LoginPage.inputUsername.setValue('performance_glitch_user');
    LoginPage.inputPassword.setValue('secret_sauce');
    LoginPage.login();
    let begin=Date.now();
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
    browser.reloadSession();
    let end= Date.now();
    timeGlitchCancelPunchase=(end-begin)/1000+"secs";

  }) 

  it('Measure successful purchase process of 3 items (standar User)', () => {
    
    LoginPage.open();
    LoginPage.inputUsername.setValue('standard_user');
    LoginPage.inputPassword.setValue('secret_sauce');
    LoginPage.login();
    let begin=Date.now();
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
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    let end= Date.now();
    timeStandar3Items=(end-begin)/1000+"secs";

  })

  it('Measure successful purchase process of 3 items (glitch User)', () => {
    
    LoginPage.open();
    LoginPage.inputUsername.setValue('performance_glitch_user');
    LoginPage.inputPassword.setValue('secret_sauce');
    LoginPage.login();
    let begin=Date.now();
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
    let end= Date.now();
    timeGlitch3Items=(end-begin)/1000+"secs";

  })

  it('Testing differences between the measured times, the glitch user is always slower', () => {

    expect(timeGlitch3Items).toBeGreaterThan(timeStandar3Items);
    expect(timeGlitchCancelPunchase).toBeGreaterThan(timeStandarCancelPunchase);

  })
})