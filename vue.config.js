// vue.config.js
const path = require('path')

module.exports = {
  baseUrl: '',
  lintOnSave: 'error',
  configureWebpack: {
    resolve: {
      alias: {
        '../../theme.config': path.join(__dirname, 'src/theme.config')
      }
    }
  }
}
