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
  entry: path.resolve(__dirname, 'src/client/lib/aboutus/index.js'),
  output: {
    path: path.resolve(__dirname, 'src/client/dist'),
    filename: 'aboutus.js'
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
        }
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
      watchContentBase: true,
      contentBase: [
        path.resolve(__dirname, 'src/client/public'),
        path.resolve(__dirname, 'src/client/dist'),
        path.resolve(__dirname, 'node_modules/bootstrap/dist/')
      ]
    }
  });
});

module.exports = bundles;
