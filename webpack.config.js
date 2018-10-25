const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
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
  },
  module: {
    rules: [{
        test: /\.css$/, 
        loader: "style-loader!css-loader"
    }]
  },
  plugins: [
    new MonacoWebpackPlugin()
  ]
};