const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckOutPage = require('../pageobjects/checkOut.page');

describe('Corroborates some problems that Problem User should have :', () => {

  it('All items should have the same wrong image', () => {

    LoginPage.open();
    LoginPage.inputUsername.setValue('problem_user');
    LoginPage.inputPassword.setValue('secret_sauce');
    LoginPage.btnLogin.click();
    expect(InventoryPage.itemBackpackImg.getAttribute('src')).toEqual('https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg');
    expect(InventoryPage.itemSauceImg.getAttribute('src')).toEqual('https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg');
    expect(InventoryPage.itemTshirtImg.getAttribute('src')).toEqual('https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg');
    
  })

  it('Add to Card Button it should work wrong', () => {

    LoginPage.open();
    LoginPage.inputUsername.setValue('problem_user');
    LoginPage.inputPassword.setValue('secret_sauce');
    LoginPage.btnLogin.click();
    InventoryPage.itemBackpackAddToCard.click();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('1');
    InventoryPage.itemSauceAddToCard.click();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('2');
    InventoryPage.itemTshirtAddToCard.click();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('2'); // This should be 3 , but it's malfunctioning 
    expect(InventoryPage.itemBackPackRemove).toBeDisplayed();
    expect(InventoryPage.itemSauceRemove).toBeDisplayed();
    expect(InventoryPage.itemTshirtRemove).not.toBeDisplayed(); // it's malfunctioning 
    browser.reloadSession();

  })

  it('Last name input in CheckOutStepOne Page should work wrong', () => {

    LoginPage.open();
    LoginPage.inputUsername.setValue('problem_user');
    LoginPage.inputPassword.setValue('secret_sauce');
    LoginPage.btnLogin.click();
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.itemSauceAddToCard.click();
    InventoryPage.btnCart.click();
    CartPage.checkOutBtn.click();
    CheckOutPage.firstNameInput.setValue('Emiliano');
    CheckOutPage.lastNameInput.setValue('Jaime');
    CheckOutPage.zipCodeInput.setValue('2000');
    expect(CheckOutPage.lastNameInput.getValue()).toEqual(''); // This is the malfunctioning 
    browser.reloadSession();
   
  })
})