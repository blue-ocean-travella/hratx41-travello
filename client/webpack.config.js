const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: {search:`${SRC_DIR}/index.js`, itinerary:`${SRC_DIR}/index2.js`, connect:`${SRC_DIR}/index3.js`},
  output: {
  filename: '[name].bundle.js',
  path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        exclude:/node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          },
        }]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          },
        }]
      },
      {
        test: /\.css$/,
        // include: SRC_DIR,
        loader: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000
  },
  plugins:[
    new Dotenv({path: "../.env"})
  ]
};