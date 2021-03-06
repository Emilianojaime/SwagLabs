const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Testing Login Page Functionalities :', () => {

  describe('Login with Valid Credentials :', () => {

    it('Testing Login Page Valid Credentials 1', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('standard_user');
      LoginPage.inputPassword.setValue('secret_sauce');
      LoginPage.login();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      InventoryPage.btnHamburgerMenu.click();
      InventoryPage.btnHamburgerMenuLogout.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/');

    })

    it('Testing Login Page Valid Credentials 2', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('locked_out_user');
      LoginPage.inputPassword.setValue('secret_sauce');
      LoginPage.login();
      expect(LoginPage.errorLocked).toBeDisplayed();

    })

    it('Testing Login Page Valid Credentials 3', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('problem_user');
      LoginPage.inputPassword.setValue('secret_sauce');
      LoginPage.login();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      InventoryPage.btnHamburgerMenu.click();
      InventoryPage.btnHamburgerMenuLogout.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/');

    })

    it('Testing Login Page Valid Credentials 4', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('performance_glitch_user');
      LoginPage.inputPassword.setValue('secret_sauce');
      LoginPage.login();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      InventoryPage.btnHamburgerMenu.click();
      InventoryPage.btnHamburgerMenuLogout.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/');

    }) 
  })

  describe('Testing blank/Wrong combinations of Login :', () => {
    
    it('Testing login Page invalid Credentials', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('testing');
      LoginPage.inputPassword.setValue('badlogin');
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorBadLogin).toBeDisplayed();
    
    })

    it('Testing valid user / invalid Password Credentials', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('standard_user');
      LoginPage.inputPassword.setValue('badlogin');
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorBadLogin).toBeDisplayed();

    })

    it('Testing invalid user / valid Password Credentials', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('testing');
      LoginPage.inputPassword.setValue('secret_sauce');
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorBadLogin).toBeDisplayed();

    })

    it('Testing invalid user / valid Password Credentials', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('testing');
      LoginPage.inputPassword.setValue('secret_sauce');
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorBadLogin).toBeDisplayed();
    
    })

    it('Testing empty Fields', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('');
      LoginPage.inputPassword.setValue('');
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorUsername).toBeDisplayed();
  
    })

    it('Testing empty username / valid password Credentials', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('');
      LoginPage.inputPassword.setValue('secret_sauce');
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorUsername).toBeDisplayed();
      
    })

    it('Testing valid username / empty password Credentials', () => {

      LoginPage.open();
      LoginPage.inputUsername.setValue('standard_user');
      LoginPage.inputPassword.setValue('');
      LoginPage.login();
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorPassword).toBeDisplayed();
    
    })
  })

  describe('Other Testing :', () => {

    it('Testing try to skip the login process', () => {

      browser.url('https://www.saucedemo.com/inventory.html');
      expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html');
      expect(LoginPage.errorAccess).toBeDisplayed();

    })
  })












})