const path = require('path');

// Define the webpack config object
let bundles = [{
  mode: 'development',
  entry: path.resolve(__dirname, 'src/client/lib/index.js'),
  output: {
    path: path.resolve(__dirname, 'src/client/dist'),
    filename: 'bundle.js'
  }
}, {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/client/lib/util/globalLoader.js'),
  output: {
    path: path.resolve(__dirname, 'src/client/dist'),
    filename: 'globalLoader.js'
  }
}];

bundles = bundles.map((b) => {
  return Object.assign(b, {
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
        }, {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    devtool: 'inline-source-map'
  });
});

module.exports = bundles;
