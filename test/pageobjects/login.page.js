const Page = require('./page');

class LoginPage extends Page {
   
    // Login Page Selectors

    get inputUsername () { return $('#user-name') };
    get inputPassword () { return $('#password') };
    get btnLogin () { return $('#login-button') };
    get errorLocked () { return $('h3*=user has been locked out') };
    get errorAccess () { return $('h3*=You can only access') };
    get errorBadLogin () { return $('h3*=Username and password do not match') };
    get errorUsername () { return $('h3*=Username is required') };
    get errorPassword () { return $('h3*=Password is required') };
    open () {
        return super.open('');
    }

    // Buttons actions

    login() {
        this.btnLogin.click();
    }
}

module.exports = new LoginPage();
