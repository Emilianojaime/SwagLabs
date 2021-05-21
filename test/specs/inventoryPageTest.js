const InventoryPage = require('../pageobjects/inventory.page');

describe('Testing Inventory Page Functionalities', () => {

  /* it('Testing Social Network Links', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    expect(InventoryPage.btnTwitter).toHaveLinkContaining('https://twitter.com/saucelabs')
    expect(InventoryPage.btnFacebook).toHaveLinkContaining('https://www.facebook.com/saucelabs')
    expect(InventoryPage.btnLinkedIn).toHaveLinkContaining('https://www.linkedin.com/company/sauce-labs/')
    InventoryPage.btnTwitter.click();
    InventoryPage.btnFacebook.click();
    InventoryPage.btnLinkedIn.click();
    browser.navigateTo('https://twitter.com/saucelabs')
    expect(browser).toHaveUrl('https://twitter.com/saucelabs')
    browser.navigateTo('https://www.facebook.com/saucelabs')
    expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
    browser.navigateTo('https://www.linkedin.com/company/sauce-labs/')
    expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
    browser.pause(1000); 

  }) */

  /* it('Testing About Links', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    InventoryPage.btnHamburgerMenu.click();
    expect(InventoryPage.btnHamburgerMenuAbout).toHaveLinkContaining('https://saucelabs.com/');
    InventoryPage.btnHamburgerMenuAbout.click();
    browser.navigateTo('https://saucelabs.com/')
    expect(browser).toHaveUrl('https://saucelabs.com/')
    browser.pause(1000); 

  }) */

  /* it('Testing Logout', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    InventoryPage.btnHamburgerMenu.click();
    InventoryPage.btnHamburgerMenuLogout.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/');
    browser.pause(1000); 

  }) */

   /* it('Testing All items button on hamburger menu', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    InventoryPage.itemBackpackImg.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    InventoryPage.btnHamburgerMenu.click();
    InventoryPage.btnHamburgerMenuAllItems.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    InventoryPage.btnCart.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    InventoryPage.btnHamburgerMenu.click();
    InventoryPage.btnHamburgerMenuAllItems.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(1000); 

  }) */

  /* it('Testing Items Navigation by clicking on the image', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    InventoryPage.itemBackpackImg.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    InventoryPage.btnBackToProducts.click();
    InventoryPage.itemSauceImg.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0')
    InventoryPage.btnBackToProducts.click();
    InventoryPage.itemTshirtImg.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3')
    browser.pause(1000); 

  }) */

  /* it('Testing Cart accountant display and remove buttons', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    InventoryPage.itemBackpackAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('1');
    InventoryPage.itemSauceAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('2');
    InventoryPage.itemTshirtAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('3');
    InventoryPage.itemSauceRemove.click();
    expect(InventoryPage.itemSauceRemove).not.toBeDisplayed();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('2');
    InventoryPage.itemSauceAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('3');
    InventoryPage.itemSauceRemove.click();
    InventoryPage.itemBackPackRemove.click();
    InventoryPage.itemTshirtRemove.click();
    expect(InventoryPage.itemSauceRemove).not.toBeDisplayed();
    expect(InventoryPage.itemBackPackRemove).not.toBeDisplayed();
    expect(InventoryPage.itemTshirtRemove).not.toBeDisplayed();
    expect(InventoryPage.CartAmountItems).not.toBeDisplayed();
    browser.pause(4000); 

  }) */

  /* it('Testing Reset Button for Cart', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    InventoryPage.itemBackpackAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('1');
    InventoryPage.itemSauceAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('2');
    InventoryPage.btnHamburgerMenu.click();
    InventoryPage.btnHamburgerMenuReset.click();
    expect(InventoryPage.itemBackPackRemove).not.toBeDisplayed(); // This button should change after the reset, however it does not
    expect(InventoryPage.itemSauceRemove).not.toBeDisplayed(); // This button should change after the reset, however it does not
    expect(InventoryPage.CartAmountItems).not.toBeDisplayed();
    browser.pause(4000); 

  }) */

  /* it('Testing Cart', () => {

    InventoryPage.open();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    InventoryPage.itemBackpackAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('1');
    InventoryPage.itemSauceAddToCard.click();
    expect(InventoryPage.CartAmountItems).toBeDisplayed();
    expect(InventoryPage.CartAmountItems.getText()).toEqual('2');
    InventoryPage.btnHamburgerMenu.click();
    InventoryPage.btnHamburgerMenuReset.click();
    expect(InventoryPage.itemBackPackRemove).not.toBeDisplayed(); // This button should change after the reset, however it does not
    expect(InventoryPage.itemSauceRemove).not.toBeDisplayed(); // This button should change after the reset, however it does not
    expect(InventoryPage.CartAmountItems).not.toBeDisplayed();
    browser.pause(4000); 

  }) */

  
});
