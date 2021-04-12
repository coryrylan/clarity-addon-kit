const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './index.js'),
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, '../dist/test-bundles'),
    sourceMapFilename: 'webpack.bundle.js.map',
  },
  devtool: 'source-map',
};
