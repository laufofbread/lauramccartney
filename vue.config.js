const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lauramccartney/'
    : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
         path.resolve(__dirname, './src/styles/app.scss'),
         path.resolve(__dirname, './src/styles/_normalize.scss'),
         path.resolve(__dirname, './src/styles/_main.scss')
      ]
    }
  }
}
