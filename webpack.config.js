const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

var ExtractTextPlugin = require ('extract-text-webpack-plugin');
var AssetsPlugin      = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

var buildHash = NODE_ENV === "production" ? "[hash]" : "dev";

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    main: "./app.js"
  },

  output: {
    path: path.join(__dirname, 'public', buildHash),
    filename: "[name]-[hash].js",
    publicPath: "/public/" + buildHash + "/"
  },

  devtool: NODE_ENV == 'development' ? 'source-map' : null,

  watch: NODE_ENV == "development",

  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
      },   
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')      
      }, 
    ]}, 

    plugins: [
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
      }), 

      new ExtractTextPlugin("[hash].css", {
            allChunks: true
      }),

      new AssetsPlugin({path: path.join(__dirname, 'etc')})
      new HtmlWebpackPlugin(),
      new AddAssetHtmlPlugin({ filepath: require.resolve('./some-file') })
    ]
}
