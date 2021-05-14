const Page = require('./page');
const InventoryPage = require('./inventory.page');
const LoginPage = require('../pageobjects/login.page');

class CartPage extends Page {
   
    // Cart Page Selectors

    get backPackTitle () { return $('#item_4_title_link') }
    get sauceTitle () { return $('#item_0_title_link') }
    get tShirtTitle () { return $('#item_3_title_link') }
    get removeBtnBackPack () { return $('#remove-sauce-labs-backpack') }
    get removeBtnSauce () { return $('#remove-sauce-labs-bike-light') }
    get removeBtnTshirt () { return $('[name="remove-test.allthethings()-t-shirt-(red)"]') }
    get continueBtn () { return $('#continue-shopping') }
    get checkOutBtn () { return $('#checkout') }
   

    openCart () {
        InventoryPage.open();
        InventoryPage.btnCart.click();
    }
    openChargeCart () {
        InventoryPage.open();
        InventoryPage.itemBackpackAddToCard.click();
        InventoryPage.itemSauceAddToCard.click();
        InventoryPage.itemTshirtAddToCard.click();
        InventoryPage.btnCart.click();
    }

}

module.exports = new CartPage();