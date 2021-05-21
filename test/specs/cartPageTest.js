const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');

describe('Testing Cart Page functionalities', () => {

  it('Testing Cart display and remove buttons', () => {

    InventoryPage.open();
    browser.pause(2000);
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.itemSauceAddToCard.click();
    InventoryPage.btnCart.click();
    expect(InventoryPage.itemBackpackTitle).toBeDisplayed(); 
    expect(InventoryPage.itemBackPackDescription).toBeDisplayed();
    expect(InventoryPage.price2999).toBeDisplayed();
    expect(InventoryPage.itemSauceTitle).toBeDisplayed(); 
    expect(InventoryPage.itemSauceDescription).toBeDisplayed(); 
    expect(InventoryPage.price999).toBeDisplayed(); 
    InventoryPage.itemBackPackRemove.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('1');
    expect(InventoryPage.itemBackpackTitle).not.toBeDisplayed(); 
    expect(InventoryPage.itemBackPackDescription).not.toBeDisplayed();
    expect(InventoryPage.price2999).not.toBeDisplayed();
    expect(InventoryPage.itemSauceTitle).toBeDisplayed(); 
    expect(InventoryPage.itemSauceDescription).toBeDisplayed(); 
    expect(InventoryPage.price999).toBeDisplayed(); 
    InventoryPage.itemSauceRemove.click();
    expect(InventoryPage.CartAmountItems).not.toBeDisplayed();
    expect(InventoryPage.itemSauceTitle).not.toBeDisplayed(); 
    expect(InventoryPage.itemSauceDescription).not.toBeDisplayed(); 
    expect(InventoryPage.price999).not.toBeDisplayed(); 
    CartPage.continueBtn.click();
    expect(InventoryPage.itemBackPackRemove).not.toBeDisplayed();
    expect(InventoryPage.itemSauceRemove).not.toBeDisplayed();
    expect(InventoryPage.itemBackpackAddToCard).toBeDisplayed();
    expect(InventoryPage.itemSauceAddToCard).toBeDisplayed();
    

  })

  /* it('Testing Cart display and reset app button', () => {

    InventoryPage.open();
    browser.pause(2000);
    InventoryPage.itemBackpackAddToCard.click();
    InventoryPage.itemSauceAddToCard.click();
    InventoryPage.btnCart.click();
    expect(InventoryPage.itemBackpackTitle).toBeDisplayed(); 
    expect(InventoryPage.itemBackPackDescription).toBeDisplayed();
    expect(InventoryPage.price2999).toBeDisplayed();
    expect(InventoryPage.itemSauceTitle).toBeDisplayed(); 
    expect(InventoryPage.itemSauceDescription).toBeDisplayed(); 
    expect(InventoryPage.price999).toBeDisplayed(); 
    InventoryPage.btnHamburgerMenu.click();
    InventoryPage.btnHamburgerMenuReset.click();
    expect(InventoryPage.CartAmountItems).not.toBeDisplayed();
    expect(InventoryPage.itemBackpackTitle).not.toBeDisplayed(); 
    expect(InventoryPage.itemBackPackDescription).not.toBeDisplayed();
    expect(InventoryPage.price2999).not.toBeDisplayed();
    expect(InventoryPage.itemSauceTitle).not.toBeDisplayed(); 
    expect(InventoryPage.itemSauceDescription).not.toBeDisplayed(); 
    expect(InventoryPage.price999).not.toBeDisplayed(); 
    
  }) */

})