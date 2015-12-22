var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output:
    { path: path.join(__dirname, 'dist')
    , filename: 'bundle.js'
    //, publicPath: '/public/'
    },
  plugins:
    [ new ExtractTextPlugin('styles.css')
    , new webpack.optimize.CommonsChunkPlugin({
        name: 'main',
        children: true,
        minChunks: 2
      })
    , new webpack.optimize.DedupePlugin()
    , new webpack.optimize.OccurenceOrderPlugin()
    , new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 51200
      })
    , new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: { warnings: false }
      })
    , new HtmlWebpackPlugin({ template: 'index.html' })
    ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/
      , include: /src/
      , loader: 'babel'
      , query: { presets: ['react', 'es2015'] }
      },
      { test: /\.css$/
      , loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      { test: /\.(jpe?g|png|gif|svg)$/
      , loaders: [ 'url?limit=8000', 'img?minimize&progressive=true' ]
      }
    ]
  },
  postcss: [ autoprefixer() ]
}
