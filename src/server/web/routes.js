const express = require('express');
const path = require('path');
const publicPath = path.resolve(__dirname, '../../client/public');

module.exports = function(app) {
  
  //serve file from public folder
  app.use('/', express.static(publicPath));

  //serve files from node_modules
  const bootstrapCssDir = path.resolve(__dirname, '../../../node_modules/bootstrap/dist/css');
  app.use('/css', express.static(bootstrapCssDir));
  const jqueryDistDir = path.resolve(__dirname, '../../../node_modules/jquery/dist');
  app.use('/dist', express.static(jqueryDistDir));
  const bootstrapDistDir = path.resolve(__dirname, '../../../node_modules/bootstrap/dist');
  app.use('/dist', express.static(bootstrapDistDir));
  const popperDistDir = path.resolve(__dirname, '../../../node_modules/popper.js/dist');

}