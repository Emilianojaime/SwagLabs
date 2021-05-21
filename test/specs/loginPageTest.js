const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Testing Login Page Functionalities', () => {

  describe('Login with Valid Credentials', () => {

    it('Testing Login Page Valid Credentials 1', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('standard_user')
      LoginPage.inputPassword.setValue('secret_sauce')
      LoginPage.login();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
      browser.pause(2000);
      InventoryPage.btnHamburgerMenu.click();
      browser.pause(2000);
      InventoryPage.btnHamburgerMenuLogout.click();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })

    it('Testing Login Page Valid Credentials 2', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('locked_out_user')
      LoginPage.inputPassword.setValue('secret_sauce')
      LoginPage.login();
      expect(LoginPage.errorLocked).toBeDisplayed();
      browser.pause(2000);
    })

    it('Testing Login Page Valid Credentials 3', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('problem_user')
      LoginPage.inputPassword.setValue('secret_sauce')
      LoginPage.login();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
      browser.pause(2000);
      InventoryPage.btnHamburgerMenu.click();
      browser.pause(2000);
      InventoryPage.btnHamburgerMenuLogout.click();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })

    it('Testing Login Page Valid Credentials 4', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('performance_glitch_user')
      LoginPage.inputPassword.setValue('secret_sauce')
      LoginPage.login();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
      browser.pause(2000);
      InventoryPage.btnHamburgerMenu.click();
      browser.pause(2000);
      InventoryPage.btnHamburgerMenuLogout.click();
      browser.pause(1000);
      expect(browser).toHaveUrl('https://www.saucedemo.com/');
    }) 
  })

  describe('Testing blank/Wrong combinations of Login', () => {
    
    it('Testing login Page invalid Credentials', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('testing')
      LoginPage.inputPassword.setValue('badlogin')
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorBadLogin).toBeDisplayed();
      browser.pause(1000);  
    })

    it('Testing valid user / invalid Password Credentials', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('standard_user')
      LoginPage.inputPassword.setValue('badlogin')
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorBadLogin).toBeDisplayed();
      browser.pause(1000);  
    })

    it('Testing invalid user / valid Password Credentials', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('testing')
      LoginPage.inputPassword.setValue('secret_sauce')
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorBadLogin).toBeDisplayed();
      browser.pause(1000);  
    })

    it('Testing invalid user / valid Password Credentials', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('testing')
      LoginPage.inputPassword.setValue('secret_sauce')
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorBadLogin).toBeDisplayed();
      browser.pause(1000);  
    })

    it('Testing empty Fields', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('')
      LoginPage.inputPassword.setValue('')
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorUsername).toBeDisplayed();
      browser.pause(1000);  
    })

    it('Testing empty username / valid password Credentials', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('')
      LoginPage.inputPassword.setValue('secret_sauce')
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorUsername).toBeDisplayed();
      browser.pause(1000);  
    })

    it('Testing valid username / empty password Credentials', () => {
      LoginPage.open();
      LoginPage.inputUsername.setValue('standard_user')
      LoginPage.inputPassword.setValue('')
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorPassword).toBeDisplayed();
      browser.pause(1000);  
    })

  })

  describe('Other Testing', () => {

    it('Testing try to skip the login process', () => {
      browser.url('https://www.saucedemo.com/inventory.html');
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
      expect(LoginPage.errorAccess).toBeDisplayed();
      browser.pause(1000);  
    })

  })












})