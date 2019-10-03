const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '../src'),
  entry: {
    app: './index.js',
    counter: './features/counter-window/index.js'
  },
  output: {
    filename: (chunkData) => {
      return chunkData.chunk.name === 'app' ? '[name].js': '[name]/[name].js';
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({ chunks: ['app'] }),
    new HtmlWebpackPlugin({ chunks: ['counter'], filename: 'counter/index.html' })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  }
}
