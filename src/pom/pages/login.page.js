const LoginComponent = require('../components/login.component');

class LoginPage extends LoginComponent {
  constructor() {
    super();
  }

  async open() {
    await browser.url('/');
  }

  async fillCredentials({
    username,
    password,
    deleteUsername = false,
    deletePassword = false,
  }) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    if (deleteUsername) {
      await this.usernameInput.clearValue();
    }
    if (deletePassword) {
      await this.passwordInput.clearValue();
    }

    await this.loginBtn.click();
  }
}

module.exports = LoginPage;
