const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

//carousel: './src/Components/Carousel.js',
module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Zule',
      chunks: ['app'],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
