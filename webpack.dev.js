const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');
const config = require('./config.js');

const entry = path.resolve(__dirname, './src/App.jsx');
module.exports = merge(common, {
  entry: {
    campus: entry,
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: '校园生活网',
      template: path.join(__dirname, 'static/html/template.dev.html'),
      inject: true,
      chunks: ['campus', 'vendors'],
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static/favicon.ico'),
        to: config.dev.outputStaticPath,
        ignore: ['.*'],
      },
    ]),
    // new webpack.DefinePlugin({
    //   __ROOT_API__: JSON.stringify(''),
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(), // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    // contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    proxy: config.dev.proxy,
  },
});