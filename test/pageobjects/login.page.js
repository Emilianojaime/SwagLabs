const Page = require('./page');

class LoginPage extends Page {
   
    // Login Page Selectors

    get inputUsername () { return $('#user-name') };
    get inputPassword () { return $('#password') }
    get btnLogin () { return $('#login-button') }

    open () {
        return super.open('');
    }

    // Buttons actions

    login() {
        this.btnLogin.click();
    }
}

module.exports = new LoginPage();
