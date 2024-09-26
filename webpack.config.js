const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader' // Modern `sass` package
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    }]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserJSPlugin({})
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '../styles/[name].bundle.css' // Adjusted path
    }),
  ],
  watch: true,
  devtool: 'source-map', // Optional for easier debugging
};
