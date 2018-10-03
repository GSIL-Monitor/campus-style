const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');
const config = require('./config');

// 获取api根路径
const getRootApiPath = (pro_env) => {
  // 开发环境
  let root = '';
  if (pro_env === 'stage') {
    // stage环境
    root = 'https://data-pre.bytedance.net';
  } else {
    // 线上环境
    root = 'https://data.bytedance.net';
  }
  return root;
};
const pro_env = process.env.PRO_ENV;

const entry = path.resolve(__dirname, '../src/App.jsx');
module.exports = merge(common, {
  entry: {
    mario: entry,
  },
  output: {
    path: config.build.outputPath,
    publicPath: pro_env === 'stage' ? config.stage.publicPath : config.build.publicPath,
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
  },
  mode: 'production',
  devtool: false,
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
    new CleanWebpackPlugin(['output'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'templates/index.html',
      PUBLIC_PATH: config.build.publicPath,
      title: 'Mario 基础用户数据控制台',
      template: path.join(__dirname, '../static/html/template.prod.html'),
      inject: true,
    }),
    new webpack.DefinePlugin({
      __ROOT_API__: JSON.stringify(getRootApiPath(pro_env)),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static/favicon.ico'),
        to: config.build.outputStaticPath,
        ignore: ['.*'],
      },
    ]),
  ],
});
