const USER_DATA = {
  VALID_USER: {
    username: 'standard_user',
    password: 'secret_sauce',
    deleteUsername: false,
    deletePassword: false,
  },

  MISSING_PASSWORD: {
    username: 'standard_user',
    password: 'secret_sauce',
    deleteUsername: false,
    deletePassword: true,
  },

  EMPTY_CREDENTIALS: {
    username: 'standard_user',
    password: 'secret_sauce',
    deleteUsername: true,
    deletePassword: true,
  },
};

module.exports = USER_DATA;
