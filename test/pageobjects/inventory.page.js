const Page = require('./page');
const LoginPage = require('../pageobjects/login.page');

class InventoryPage extends Page {
   
    // Inventory Page Selectors

    get filter () { return $('.product_sort_container') };
    get itemInPosition1 () { return $('//div[@class="inventory_list"]//div[1]//div[1]//a') };
    get itemInPosition2 () { return $('//div[@class="inventory_list"]//div[2]//div[1]//a') };
    get itemInPosition3 () { return $('//div[@class="inventory_list"]//div[3]//div[1]//a') };
    get itemInPosition4 () { return $('//div[@class="inventory_list"]//div[4]//div[1]//a') };
    get itemInPosition5 () { return $('//div[@class="inventory_list"]//div[5]//div[1]//a') };
    get itemInPosition6 () { return $('//div[@class="inventory_list"]//div[6]//div[1]//a') };
    get itemBackpackTitle () { return $('.inventory_item_name=Sauce Labs Backpack') };
    get itemTshirtTitle () { return $('.inventory_item_name=Test.allTheThings() T-Shirt (Red)') };
    get itemSauceTitle () { return $('.inventory_item_name=Sauce Labs Bike Light') };
    get itemBackpackImg () { return $('#item_4_img_link').$('img') };
    get itemTshirtImg () { return $('#item_3_img_link').$('img') };
    get itemSauceImg () { return $('#item_0_img_link').$('img') };
    get itemBackpackAddToCard () { return $('#add-to-cart-sauce-labs-backpack') };
    get itemTshirtAddToCard () { return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]') };
    get itemSauceAddToCard () { return $('#add-to-cart-sauce-labs-bike-light') };
    get itemBackPackDescription () { return $('.inventory_item_desc*=carry.allTheThings() with the sleek') };
    get itemSauceDescription () { return $('.inventory_item_desc*=A red light isn') };
    get itemTshirtDescription () { return $('.inventory_item_desc*=This classic Sauce Labs t-shirt') };
    get itemBackPackRemove () { return $('#remove-sauce-labs-backpack') };
    get itemSauceRemove () { return $('#remove-sauce-labs-bike-light') };
    get itemTshirtRemove () { return $('[name="remove-test.allthethings()-t-shirt-(red)"]') };
    get price2999 () { return $('.inventory_item_price*=29.99') };
    get price999 () { return $('.inventory_item_price*=9.99') };
    get price1599 () { return $('.inventory_item_price*=15.99') };
    get btnBackToProducts () { return $('#back-to-products') };
    get btnHamburgerMenu () { return $('#react-burger-menu-btn') };
    get btnHamburgerMenuCross () { return $('#react-burger-cross-btn') };
    get btnHamburgerMenuAllItems () { return $('#inventory_sidebar_link') };
    get btnHamburgerMenuAbout () { return $('#about_sidebar_link') };
    get btnHamburgerMenuLogout () { return $('#logout_sidebar_link') };
    get btnHamburgerMenuReset () { return $('#reset_sidebar_link') };
    get btnCart () { return $('.shopping_cart_link') };
    get CartAmountItems () { return $('.shopping_cart_badge') };
    get btnTwitter () { return $('.social_twitter').$('*=Twitter') };
    get btnFacebook () { return $('.social_facebook').$('*=Facebook') };
    get btnLinkedIn () { return $('.social_linkedin').$('*=LinkedIn') };

    open () {
        super.open('');
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.login();
    }

    currentOrdenOfItems () {
      let currentOrder = [this.itemInPosition1.getAttribute('id'), this.itemInPosition2.getAttribute('id'), this.itemInPosition3.getAttribute('id'), this.itemInPosition4.getAttribute('id'), this.itemInPosition5.getAttribute('id'), this.itemInPosition6.getAttribute('id')];
      return currentOrder;
    }

    // Buttons actions

    login() {
      this.btnLogin.click();
    }
}

module.exports = new InventoryPage();