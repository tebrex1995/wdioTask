
//**
 * 
 * @param {'string'} username 
 * @param {'string'} password 
 * @param {'boolean'} deleteUsername 
 * @param {'boolean'} deletePassword 
 */
async function fillCredentials(
  username,
  password,
  deleteUsername,
  deletePassword
) {
  const loginBtn = await $('[data-test="login-button"]');
  const usernameInputField = await $('[data-test="username"]');
  const passwordInputField = await $('[data-test="password"]');

  await usernameInputField.setValue(username);
  await passwordInputField.setValue(password);
  if (deleteUsername) {
    await usernameInputField.clearValue();
  } else if (deletePassword) {
    await passwordInputField.clearValue();
  }
  await loginBtn.click();
}

describe('Testing Login functionality on swag labs', () => {
  beforeEach('Visit Swag Labs home page', async () => {
    //Visit page
    await browser.url('/');
    //Check correct page is loaded
    await expect(browser).toHaveTitle('Swag Labs');
  });

  it('Should get correct error with empty credentials', async () => {
    const error = await $('[data-test="error"]');
    const errorMessage = 'Epic sadface: Username is required';

    await fillCredentials('test123', 'test', true, true);

    await expect(error).toHaveText(errorMessage);
  });

  it('Should get correct error message with empty password field', async () => {
    const error = await $('[data-test="error"]');
    const errorMessage = 'Epic sadface: Password is required';
    await fillCredentials('test123', 'test', false, true);

    await expect(error).toHaveText(errorMessage);
  });

  it('Should be successfully logged in', async () => {
    const swagLabsLogo = await $('.app_logo');
    await fillCredentials('standard_user', 'secret_sauce', false, false);

    expect(swagLabsLogo).toHaveValue('Swag Labs');
  });
});
