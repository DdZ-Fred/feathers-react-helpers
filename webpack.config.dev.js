module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'index.js',
    library: 'FeathersReactHelpers',
    libraryTarget: 'umd',
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
};
