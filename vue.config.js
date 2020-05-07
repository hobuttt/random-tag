const path = require('path')

module.exports = {
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: 'dist',
  publicPath: '.',
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  }
}
