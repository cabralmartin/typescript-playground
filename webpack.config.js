const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bin')
  },
  devServer: {
    contentBase: './',
    publicPath: '/bin/'
  }
};