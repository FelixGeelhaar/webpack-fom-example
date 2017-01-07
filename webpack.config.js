const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Check if the environment variable of NODE_ENV is set to Production
// Could be done through webpack -p or NODE_ENV=production webpack
const isProduction = process.env.NODE_ENV === 'production';

const VENDOR_LIBS = [
  'react', 'react-dom', 'react-router', 'lodash',
  'axios'
];

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: './index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader']
        }),
        test: /\.((s(a|c)ss)|css)$/ // matches sass, scss or css
      },
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[hash].[ext]'}
          }
        ],
        test: /\.(ttf|woff|woff2|eot)$/
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|gif|svg)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
      title: 'Webpack FOM Example'
    }),
    new ExtractTextPlugin('style.[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    // Production configuration
    isProduction ?
      (new webpack.optimize.UglifyJsPlugin({
        warning: false,
        screwie: true,
        comment: false,
        compress: true
      }),
      new webpack.optimize.DedupePlugin()
    ) : () => {}
  ]
};

module.exports = config;
