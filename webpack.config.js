const path = require('path');

//Define the webpack config object
var bundles =[{
  mode: 'development',
  entry: path.resolve(__dirname, 'src/client/lib/index.js'),
  output: {
    path: path.resolve(__dirname, 'src/client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}];

module.exports = bundles;