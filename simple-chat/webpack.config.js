'use strict';

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  module: {
    rules: [
      {
        use: [
          {
            options: {
              presets: ['@babel/preset-env'],
            },
            loader: 'babel-loader',
          },
        ],
        include: SRC_PATH,
        test: /\.js$/,
      },
      {
        use: [
          {
            loader: 'css-loader',
          },
        ],
        test: /shadow\.css$/,
        include: SRC_PATH,
      },
      {
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
        test: /index\.css$/,
        include: SRC_PATH,
      },
    ],
    strictExportPresence: true,
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'style.css',
    }),
    new HTMLWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH,
  },
  entry: {
    index: './scripts/index.js',
  },
  context: SRC_PATH,
};
