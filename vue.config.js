const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL, // 在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img', resolve('src/assets/images'))
      .set('@style', resolve('src/assets/styles'))
      .set('@js', resolve('src/assets/js'))
      .set('@comp', resolve('src/components'))
      .end();
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:3000'
  }
};
