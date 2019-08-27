// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    './index.js' // the entry point of our app
  ],
  output: {
    filename: '[name].[hash].js',
  },
  devServer: {
    hot: true, // enable HMR on the server
    inline: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ]
});
