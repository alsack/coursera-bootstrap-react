const path = require('path');

const rootDir = path.resolve(__dirname, '../../..');
const nodeModules = path.resolve(rootDir, 'node_modules');
const publicPath = path.resolve(__dirname, '../../client/public');
const distPath = path.resolve(__dirname, '../../client/dist');

module.exports = [{
  path: '/css',
  dir: path.resolve(nodeModules, 'bootstrap/dist/css')
}, {
  path: '/css',
  dir: path.resolve(nodeModules, 'font-awesome')
}, {
  path: '/css',
  dir: path.resolve(nodeModules, 'bootstrap-social')
}, {
  path: '/',
  dir: publicPath
}, {
  path: '/',
  dir: distPath
}];
