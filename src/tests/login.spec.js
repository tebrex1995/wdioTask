const LoginPage = require('../pom/pages/login.page');
const ERROR_MESSAGES = require('../pom/fixtures/errorMessages');
const ErrorComponent = require('../pom/components/common/error.component');
const Headers = require('../pom/components/common/headers.component');
const USER_DATA = require('../pom/fixtures/userData');

const loginPage = new LoginPage();
const errorComponent = new ErrorComponent();
const headers = new Headers();

describe('Testing Login functionality on swag labs', () => {
  beforeEach('Visit Swag Labs home page', async () => {
    //Visit page
    await loginPage.open();
    //Check correct page is loaded
    await expect(browser).toHaveTitle(headers['title']);
  });

  it('Should get correct error with empty credentials', async () => {
    await loginPage.fillCredentials(USER_DATA['EMPTY_CREDENTIALS']);

    await expect(errorComponent['errorContainer']).toHaveText(
      ERROR_MESSAGES['MISSING_USERNAME']
    );
  });

  it('Should get correct error message with empty password field', async () => {
    await loginPage.fillCredentials(USER_DATA['MISSING_PASSWORD']);

    await expect(errorComponent['errorContainer']).toHaveText(
      ERROR_MESSAGES['MISSING_PASSWORD']
    );
  });

  it('Should be successfully logged in', async () => {
    await loginPage.fillCredentials(USER_DATA['VALID_USER']);

    expect(headers['homeLogo']).toHaveValue(headers['title']);
  });
});
