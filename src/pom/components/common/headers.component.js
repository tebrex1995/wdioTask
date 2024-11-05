class Headers {
  constructor() {
    this.title = 'Swag Labs';
  }

  get homeLogo() {
    return $('.app_logo');
  }
}

module.exports = Headers;
