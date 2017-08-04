import path from 'path';
var webpack = require('webpack');

export default {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: "bundle.js",
    path: __dirname,
    publicPath:'/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader']
      }
    ]
   },
  resolve: {
    extensions: ["*", ".js"]
  }
}