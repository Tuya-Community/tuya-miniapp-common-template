module.exports = {
  env: {
    es2021: true,
    CommonJS: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    Page: 'readonly',
    App: 'readonly',
    Component: 'readonly',
    getApp: 'readonly',
    getCurrentPages: 'readonly',
    ty: 'readonly',
  },
  rules: {},
}
