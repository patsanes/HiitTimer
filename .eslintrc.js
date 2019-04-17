module.exports = {
  // env: {
  //   browser: true,
  //   es6: true,
  // },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true,
    },
    // ecmaVersion: 2018,
    //   sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'off',
    'react/forbid-prop-types': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['self'] }],
  },
};