const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const SRC = path.resolve(__dirname, 'src/index.js');
const DIST = path.resolve(__dirname, 'dist/assets');

module.exports = {
  entry: SRC,
  output: {
    path: DIST,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx?)$/,
        loader: 'babel-loader', 
        exclude: /node_modules/
      },
      { 
        test: /\.(sass|scss)$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          }
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}