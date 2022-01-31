const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/app/index.tsx',
  },
  output: {
    libraryTarget: 'umd',
    filename: 'spacetime.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  optimization: {
    splitChunks: {},
  },
  devServer: {
    contentBase: './dist/',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new ESLintPlugin({}),
    new CopyPlugin([
      { from: './src/templates/**', to: '', flatten: true },
    ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
