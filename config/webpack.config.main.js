const path = require('path');

module.exports = {
  target: 'electron-main',
  entry: path.resolve(__dirname, '../src/main/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/main')
  },
  node: {
    __dirname: false,
    __filename: false
  },
  mode: process.env.ENV || 'development',
  module: {
    rules: [
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
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}