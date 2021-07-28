module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'no-param-reassign': 0,
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
};
