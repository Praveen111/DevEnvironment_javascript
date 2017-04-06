 import path from 'path';
 import webpack from 'webpack';
 import HtmlWebpackPlugin from 'html-webpack-plugin';
 import webpackMd5Hash from 'webpack-md5-hash';
 import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpackMd5Hash(),
    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new HtmlWebpackPlugin({
      template : 'src/index.html',
      //  minify: {
      //    removeComments: true,
      //    collapseWhitespace: true,
      //    removeRedundantAttributes: true,
      //    useShortDoctype: true,
      //    removeEmptyAttributes: true,
      //    removeStyleLinkTypeAttributes: true,
      //    keepClosingSlash: true,
      //    minifyJS: true,
      //    minifyCSS: true,
      //    minifyURLs: true
      //  },
      inject : true,
      trackJsToken : '651025537a73437d828c79e2930bd870'
    }),
    //eliminate duplicate package while generating plugins
    new webpack.optimize.DedupePlugin(),
    //minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
