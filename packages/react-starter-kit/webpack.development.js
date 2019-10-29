const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const developmentConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: '[name].bundle.[hash].js'
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
});

module.exports = developmentConfig;
