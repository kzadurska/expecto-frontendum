const toKebabCase = (string = '') =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, '-') // Replace all spaces and low dash
    .toLowerCase()

module.exports = toKebabCase
