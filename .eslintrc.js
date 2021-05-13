module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-console': 0,
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 0,
    'no-restricted-syntax': 'warn',
    'no-shadow': 0,
    'no-plusplus': 0
  }
};
