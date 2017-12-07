var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './');

var config = {
  entry:{
      index: APP_DIR + 'index.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude:/node_modules/,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;