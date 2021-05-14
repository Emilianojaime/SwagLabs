const InventoryPage = require('../pageobjects/inventory.page');

describe('Testing Inventory Page Functionalities', () => {

  it('Testing Inventory Page selectors', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

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
    browser.pause(2000);
    expect(InventoryPage.btnCart).toExist();
    expect(InventoryPage.btnTwitter).toExist();
    expect(InventoryPage.btnFacebook).toExist();
    expect(InventoryPage.btnLinkedIn).toExist();
    browser.pause(1000);
    
  })

});
