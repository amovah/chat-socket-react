// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['env', 'react'],
        plugins: ['add-module-exports', 'transform-decorators-legacy']
      }
    }]
  },
  plugins: [
    // new UglifyJsPlugin({
    //   cache: true
    // })
  ]
};
