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
    semi: 'off'
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'standard/object-curly-even-spacing': ['error', 'either'],
    'standard/array-bracket-even-spacing': ['error', 'either'],
    'standard/computed-property-even-spacing': ['error', 'even'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
