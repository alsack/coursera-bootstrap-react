const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Define the webpack config object
const bundle = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/client/lib/index.js'),
    globalLoader: path.resolve(__dirname, 'src/client/lib/util/globalLoader.js')
  },
  plugins: [
    new CleanWebpackPlugin(['src/client/dist'])
  ],
  output: {
    path: path.resolve(__dirname, 'src/client/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: './.eslintrc.json'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }, {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};

module.exports = bundle;
