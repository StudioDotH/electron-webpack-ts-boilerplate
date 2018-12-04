const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'electron-renderer',
  entry: path.join(__dirname, '../src/renderer/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../bundled/renderer')
  },
  node: {
    __dirname: false,
    __filename: false
  },
  mode: process.env.ENV || 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss', '.css' ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}