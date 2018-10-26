const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
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