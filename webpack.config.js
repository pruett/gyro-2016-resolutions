var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output:
    { path: path.join(__dirname, 'dist')
    , filename: 'bundle.js'
    , publicPath: '/public/'
    },
  module: {
    loaders: [
      { test: /\.jsx?$/
      , include: /src/
      , loader: 'babel'
      , query: { presets: ['react', 'es2015'] }
      }
    ]
  }
}
