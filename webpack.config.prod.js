const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'index.js',
    library: 'FeathersReactHelpers',
    libraryTarget: 'umd',
    externals: {
      react: 'react',
    },
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
