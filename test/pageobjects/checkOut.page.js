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
        get errorFirstName () { return $('h3*=Error: First Name is required') }
        get errorLastName () { return $('h3*=Error: Last Name is required') }
        get errorPostalCode () { return $('h3*=Error: Postal Code is required') }
      
       
    
        open () {
           InventoryPage.open();
           InventoryPage.btnCart.click();
           CartPage.checkOutBtn.click();
        }
    
    }

module.exports = new CheckOutPage();