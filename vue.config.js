const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/app.scss'),
        path.resolve(__dirname, './src/styles/_normalize.scss'),
        path.resolve(__dirname, './src/styles/_main.scss'),
        path.resolve(__dirname, './src/styles/_animations.scss')
      ]
    }
  },
  chainWebpack: config => {
    const imagesRule = config.module.rule('images');
    imagesRule.uses.clear();

    imagesRule
      .test(/\.(jpe?g|png)$/i)
      .use('responsive-loader')
          .loader('responsive-loader')
          .options({
            adapter: require('responsive-loader/sharp'),
            sizes: [300, 600, 1200, 2000],
            placeholder: true,
            placeholderSize: 50
          })
          .end()
  }
}
