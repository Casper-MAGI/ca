const webpack = require('webpack')
const path = require('path')

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'app/App.js'),
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules\/(?!(react-wx-images-viewer))/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 10000,
              outputPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    open: false,
    host: '127.0.0.1',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'X-Frame-Options': 'ALLOW-FROM *',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '@page': path.resolve(__dirname, 'app', 'page'),
      '@component': path.resolve(__dirname, 'app', 'component'),
      '@util': path.resolve(__dirname, 'app', 'util'),
      '@style': path.resolve(__dirname, 'app', 'style'),
      '@image': path.resolve(__dirname, 'app', 'image'),
    },
    modules: ['node_modules'],
  }
}

module.exports = config
