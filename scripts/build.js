const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats.toString({
    chunks: false, // Makes the build much quieter
    modules: false,
    hash: false,
    assets: false,
    colors: true // Shows colors in the console
  }));
});
