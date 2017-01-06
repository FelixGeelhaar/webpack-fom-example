const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Check if the environment variable of NODE_ENV is set to Production
// Could be done through webpack -p or NODE_ENV=production webpack
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'Webpack FOM Example'
    }),
    new ExtractTextPlugin('style.css'),
    // Production configuration
    isProduction ?
      new webpack.optimize.UglifyJsPlugin({
        warning: false,
        screwie: true,
        comment: false,
        compress: true
      }) : () => {}
  ]
};

module.exports = config;
