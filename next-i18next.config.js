const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'vi-VN',
    locales: ['en', 'vi-VN']
  },
  localePath: path.resolve('public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——'
}
