const path = require('path');
const outputPathBuild = path.resolve(__dirname, '../output/');
const outputPathDev = path.resolve(__dirname, '../dist/');

module.exports = {
  build: {
    env: { NODE_ENV: '"production"' },
    publicPath: '//s3b.pstatp.com/dp/mario_fe',
    outputPath: outputPathBuild,
    // outputTemplatePath: path.resolve(__dirname, '../static/html/template.prod.html'),
    outputStaticPath: path.resolve(outputPathBuild, 'static'),
    productionSourceMap: false,
    bundleAnalyzerReport: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  },
  stage: {
    env: { NODE_ENV: '"production"' },
    publicPath: '//s3b.pstatp.com/dp/mario_stage_fe',
    outputPath: outputPathBuild,
    outputStaticPath: path.resolve(outputPathBuild, 'static'),
    productionSourceMap: false,
    bundleAnalyzerReport: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  },
  dev: {
    env: { NODE_ENV: '"development"' },
    publicPath: '/',
    outputPath: outputPathDev,
    // outputTemplatePath: path.resolve(__dirname, '../static/html/template.dev.html'),
    outputStaticPath: path.resolve(outputPathDev, 'static'),
    proxy: {
      '/api/1/user': {
        target: 'https://data.bytedance.net/facade',
        headers: {
          host: 'data.bytedance.net',
          cookie: 'sessionid=l9v8fzef2qskci43xa5tesanbz05pdb1;',
          // cookie: 'sessionid="";',
        },
      },
      '/mario/api/**': {
        // target: 'https://data.bytedance.net/mario_stage/api ',
        target: 'http://10.8.122.169:8003',
        pathRewrite: { '^/mario/api': '/api' },
        headers: {
          host: 'data.bytedance.net',
          cookie: 'sessionid=l9v8fzef2qskci43xa5tesanbz05pdb1;',
        },
      },
    },
  },
};
