const LoginPage = require('../pageobjects/login.page');

describe('Testing Login Page Functionalities', () => {

  it('Testing Login Page selectors', () => {

    LoginPage.open();
    browser.pause(2000);
    expect(LoginPage.inputUsername).toExist();
    expect(LoginPage.inputPassword).toExist();
    expect(LoginPage.btnLogin).toExist();

  })
















})