const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('src'),
      '@tests': path.resolve('tests')
    }
  }
}
