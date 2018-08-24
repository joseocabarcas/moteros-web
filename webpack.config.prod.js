module.exports = {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash].js',
    path: __dirname + '/build',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
}