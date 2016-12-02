const path = require('path');

var ExtractTextPlugin = require ('extract-text-webpack-plugin');
var buildHash = process.env.NODE_ENV === "production" ? "[hash]" : "dev";

const config = {
  context: path.join(__dirname, 'src'),

  entry: {
    main: "./app.js"
  },

  output: {
    path: path.join(__dirname, 'public', buildHash),
    filename: "[name].js",
    publicPath: "/public/" + buildHash + "/"
  },

  watch: true,

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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')      
      },  
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
    ]}, 

    plugins: [
      new ExtractTextPlugin("css/styles.css", {
            allChunks: true
      })
    ]
}

if (process.env.NODE_ENV == 'development') {
  config.devtool = "source-map"
}

module.exports = config
