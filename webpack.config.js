const path = require('path');

module.exports = {
  mode:'development',
  entry: {
    index: './src/index.js',
    "page-load": './src/page-load.js',
    "menu-load": './src/menu-load.js',
    "contact-load": './src/contact-load.js',
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};