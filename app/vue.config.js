const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '.',
  outputDir: 'dist',
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: true
      })
    ]
  }
}
