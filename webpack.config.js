var webpack = require('webpack');
var path = require('path');


var config = {
  entry:{
      index:'./index.jsx',
  },
  output: {
    path:path.resolve(__dirname, './build'),
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
    contentBase: "./"
  }
};

module.exports = config;