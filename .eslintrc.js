module.exports = {
  extends: 'standard',
  plugins: ['standard', 'react'],
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 8 },
  globals: { __PATH_PREFIX__: 'readable' },
  rules: {
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'arrow-spacing': ['warn', { before: true, after: true }],
    indent: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
