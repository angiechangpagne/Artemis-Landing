const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const outputDir = 'dist';

 module.exports = {
  entry: './src/client/index.tsx',
  output: {
    path: path.join(__dirname, outputDir),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|ttf|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000000 }
          }
        ]
      },
      {
        test: /\.(ico|mp4)$/,
        use: [{
          loader: 'file-loader?name=[name].[ext]'  
        }]
      }
    ]
  },
  devServer: {
    port: 3005,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new CleanWebPackPlugin([outputDir]),
    new HtmlWebpackPlugin({
      template: './ipo/index.html'
    })
    , 
    new CompressionPlugin()
  ]
}