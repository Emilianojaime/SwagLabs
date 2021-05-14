const Page = require('./page');
const LoginPage = require('../pageobjects/login.page');

class InventoryPage extends Page {
   
    // Inventory Page Selectors

    get filter () { return $('.product_sort_container') }
    get itemBackpackTitle () { return $('.inventory_item_name=Sauce Labs Backpack') }
    get itemTshirtTitle () { return $('.inventory_item_name=Test.allTheThings() T-Shirt (Red)') }
    get itemSauceTitle () { return $('.inventory_item_name=Sauce Labs Bike Light') }
    get itemBackpackImg () { return $('#item_4_img_link') }
    get itemTshirtImg () { return $('#item_3_img_link') }
    get itemSauceImg () { return $('#item_0_img_link') }
    get itemBackpackAddToCard () { return $('#add-to-cart-sauce-labs-backpack') }
    get itemTshirtAddToCard () { return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]') }
    get itemSauceAddToCard () { return $('#add-to-cart-sauce-labs-bike-light') }
    get btnBackToProducts () { return $('#back-to-products') }
    get btnHamburgerMenu () { return $('#react-burger-menu-btn') }
    get btnHamburgerMenuCross () { return $('#react-burger-cross-btn') }
    get btnHamburgerMenuAllItems () { return $('#inventory_sidebar_link') }
    get btnHamburgerMenuAbout () { return $('#about_sidebar_link') }
    get btnHamburgerMenuLogout () { return $('#logout_sidebar_link') }
    get btnHamburgerMenuReset () { return $('#reset_sidebar_link') }
    get btnCart () { return $('.shopping_cart_link') }
    get btnTwitter () { return $('.social_twitter').$('*=Twitter') }
    get btnFacebook () { return $('.social_facebook').$('*=Facebook') }
    get btnLinkedIn () { return $('.social_linkedin').$('*=LinkedIn') }

    open () {
        super.open('');
        LoginPage.inputUsername.setValue('standard_user')
        LoginPage.inputPassword.setValue('secret_sauce')
        LoginPage.login();
    }

    // Buttons actions

    login() {
      this.btnLogin.click();
  }
}

module.exports = new InventoryPage();