const path = require('path');
const config = require('./config');

const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
  context: resolve('src'),
  resolve: {
    extensions: ['.js', '.jsx'],
    mainFields: ['browser', 'module', 'main'],
    alias: {
      src: resolve('src'),
      stores: resolve('src/stores'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            //   localIdentName: '[local]',
            // },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                'font-size-base': '12px',
                'font-family': '"Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
                'font-variant': 'normal',
              },
            },
          }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'static/images',
            publicPath: process.env.NODE_ENV === 'production' ? `${config.build.publicPath}/static/images` : '/static/images',
            name: '[name].[hash:7].[ext]',
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            outputPath: '/static/fonts',
            publicPath: process.env.NODE_ENV === 'production' ? `${config.build.publicPath}/static/fonts` : '/static/fonts',
            name: '[name].[hash:7].[ext]',
          },
        },
      },
    ],
  },
};