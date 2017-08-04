import path from 'path';
var webpack = require('webpack');

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
    ],
  output: {
    filename: "bundle.js",
    path: __dirname,
    publicPath:'/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
   },
  resolve: {
    extensions: ["*", ".js"]
  }
}