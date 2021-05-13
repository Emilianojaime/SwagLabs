const Inventory = require('./page');

class InventoryPage extends Page {
   
    // Inventory Page Selectors

    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('inventory.html');
    }

    // Buttons actions
}

module.exports = new InventoryPage();