class LoginComponent {
  get usernameInput() {
    return $('[data-test="username"]');
  }

  get passwordInput() {
    return $('[data-test="password"]');
  }

  get loginBtn() {
    return $('[data-test="login-button"]');
  }
}

module.exports = LoginComponent;
