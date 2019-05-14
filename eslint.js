module.exports = {
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
