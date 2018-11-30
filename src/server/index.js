const router = require('./web/router.js');

//launch server
const node_web_server = require('node_web_server/src/index.js');

//add routes
node_web_server.app.use('/', router);

module.exports = { node_web_server };