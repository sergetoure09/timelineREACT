var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, '.');

var config = {
  entry:{
      index: APP_DIR + '/index.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-bundle.js'
  },
  module : {
    rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
            test : /\.jsx?/,
            exclude:/node_modules/,
            loader : 'babel-loader'
          }
      ]
  },
  devServer: {
    contentBase: "./build"
  }
};

module.exports = config;