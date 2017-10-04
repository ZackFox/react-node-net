const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index'),
  ],
  output: {
    path: path.join(__dirname, '/public/assets/js/'),
    publicPath: '/assets/js',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },
};
