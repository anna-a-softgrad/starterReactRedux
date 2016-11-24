const path = require('path');

var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    main: "./app.js"
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].js",
    publicPath: "/public/"
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: "source-map",

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'

    },  {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            
        },
    ]}, 

    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}
