const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page')
const CheckOutPage = require('../pageobjects/checkOut.page');
const CheckOutStepTwoPage = require('../pageobjects/checkOutStepTwo.page');
const checkOutCompletePage = require('../pageobjects/checkOutComplete.page');

describe('Testing Selectors for All PageObjets Files :', () => {

  it('Testing Login Page selectors', () => {

    LoginPage.open();
    expect(LoginPage.inputUsername).toExist();
    expect(LoginPage.inputPassword).toExist();
    expect(LoginPage.btnLogin).toExist();

  })

  it('Testing Inventory Page selectors', () => {

    InventoryPage.open();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    expect(InventoryPage.filter).toExist();
    expect(InventoryPage.itemBackpackTitle).toExist();
    expect(InventoryPage.itemSauceTitle).toExist();
    expect(InventoryPage.itemTshirtTitle).toExist();
    expect(InventoryPage.itemBackpackAddToCard).toExist();
    expect(InventoryPage.itemSauceAddToCard).toExist();
    expect(InventoryPage.itemTshirtAddToCard).toExist();
    expect(InventoryPage.itemBackpackImg).toExist();
    expect(InventoryPage.itemSauceImg).toExist();
    InventoryPage.itemTshirtImg.click();
    InventoryPage.btnBackToProducts.click();
    InventoryPage.btnHamburgerMenu.click();
    expect(InventoryPage.btnHamburgerMenuAllItems).toExist();
    expect(InventoryPage.btnHamburgerMenuAbout).toExist();
    expect(InventoryPage.btnHamburgerMenuLogout).toExist();
    expect(InventoryPage.btnHamburgerMenuReset).toExist();
    InventoryPage.btnHamburgerMenuCross.click();
    expect(InventoryPage.btnCart).toExist();
    expect(InventoryPage.btnTwitter).toExist();
    expect(InventoryPage.btnFacebook).toExist();
    expect(InventoryPage.btnLinkedIn).toExist();
    
  })

  it('Testing Cart Page selectors', () => {

    CartPage.openChargeCart();
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
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    expect(CheckOutPage.firstNameInput).toExist();
    expect(CheckOutPage.lastNameInput).toExist();
    expect(CheckOutPage.zipCodeInput).toExist();
    expect(CheckOutPage.cancelBtn).toExist();
    expect(CheckOutPage.continueCheckOutBtn).toExist();

  })

  it('Testing CheckOutStepTwo Page selectors', () => {

    CheckOutStepTwoPage.open();
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    expect(CheckOutStepTwoPage.cancelBtn).toExist();
    expect(CheckOutStepTwoPage.finishBtn).toExist();
    expect(CheckOutStepTwoPage.paymentInfoTitle).toExist();
    expect(CheckOutStepTwoPage.paymentInfoValue).toExist();
    expect(CheckOutStepTwoPage.shippingInfoTitle).toExist();
    expect(CheckOutStepTwoPage.shippingInfoValue).toExist();
    expect(CheckOutStepTwoPage.itemTotal).toExist();
    expect(CheckOutStepTwoPage.tax).toExist();
    expect(CheckOutStepTwoPage.total).toExist();
 
  })

  it('Testing CheckOutComplete Page selectors', () => {

    checkOutCompletePage.open();
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    expect(checkOutCompletePage.backHomeBtn).toExist();
    expect(checkOutCompletePage.completeHeader).toExist();
    expect(checkOutCompletePage.infoOrder).toExist();
    expect(checkOutCompletePage.ponyImg).toExist();

  })
});