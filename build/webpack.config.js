const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    bundle: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'static/[name][ext]',
    clean: true,
  },
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  devServer: {
    port: 3000,
    open: true,
    static: {
      directory: path.join(__dirname, '../src'),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  'autoprefixer',
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction,
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../src')],
              },
            },
          },
        ],
      },
      // Images - using Webpack 5 asset modules
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        type: 'asset/resource',
      },
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ESLintPlugin({
      extensions: ['js'],
      emitWarning: !isProduction,
      failOnError: isProduction,
    }),
    new StyleLintPlugin({
      extensions: ['scss', 'css'],
      emitWarning: true,
      failOnError: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: isProduction && {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
