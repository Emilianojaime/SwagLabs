const InventoryPage =  require('./inventory.page');
const CartPage = require('./cart.page');
const Page = require('./page');

class CheckOutPage extends Page {

       
        // ChekOut Page Selectors
    
        get firstNameInput () { return $('#first-name') }
        get lastNameInput () { return $('#last-name') }
        get zipCodeInput () { return $('#postal-code') }
        get cancelBtn () { return $('#cancel') }
        get continueCheckOutBtn () { return $('#continue') }
        
       
    
        open () {
           InventoryPage.open();
           InventoryPage.btnCart.click();
           CartPage.checkOutBtn.click();
        }
    
    }

module.exports = new CheckOutPage();