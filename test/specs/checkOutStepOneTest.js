const InventoryPage = require('../pageobjects/inventory.page');
const CheckOutPage = require('../pageobjects/checkOut.page');

describe('Testing Checkout Page Functionalities', () => {

  describe('Testing Fields Combinations:', () => {

    it('Testing valid inputs', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.firstNameInput.setValue('Emiliano');
      CheckOutPage.lastNameInput.setValue('Jaime');
      CheckOutPage.zipCodeInput.setValue('2000');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      browser.pause(1000);
      
    })

    it('Testing empty fields', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      expect(CheckOutPage.errorFirstName).toBeDisplayed();
      browser.pause(1000);
      
    })

    it('Testing empty name field ', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.firstNameInput.setValue('');
      CheckOutPage.lastNameInput.setValue('Jaime');
      CheckOutPage.zipCodeInput.setValue('2000');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      expect(CheckOutPage.errorFirstName).toBeDisplayed();
      browser.pause(1000);
      
    })

    it('Testing empty last name field', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.firstNameInput.setValue('Emiliano');
      CheckOutPage.lastNameInput.setValue('');
      CheckOutPage.zipCodeInput.setValue('2000');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      expect(CheckOutPage.errorLastName).toBeDisplayed();
      browser.pause(1000);
      
    })

    it('Testing empty postal code field', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.firstNameInput.setValue('Emiliano');
      CheckOutPage.lastNameInput.setValue('Jaime');
      CheckOutPage.zipCodeInput.setValue('');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      expect(CheckOutPage.errorPostalCode).toBeDisplayed();
      browser.pause(1000);
      
    })

    it('Testing invalid first name field', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.firstNameInput.setValue('12345');
      CheckOutPage.lastNameInput.setValue('Jaime');
      CheckOutPage.zipCodeInput.setValue('2000');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      browser.pause(1000);
      
    })

    it('Testing invalid last name field', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.firstNameInput.setValue('Emiliano');
      CheckOutPage.lastNameInput.setValue('12345');
      CheckOutPage.zipCodeInput.setValue('2000');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      browser.pause(1000);
      
    })

    it('Testing invalid zip code field', () => {

      CheckOutPage.open();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
      CheckOutPage.firstNameInput.setValue('Emiliano');
      CheckOutPage.lastNameInput.setValue('Jaime');
      CheckOutPage.zipCodeInput.setValue('test');
      CheckOutPage.continueCheckOutBtn.click();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
      browser.pause(1000);
      
    })
    
  
  })  

});
