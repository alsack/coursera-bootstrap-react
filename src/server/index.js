const nodeWebServer = require('node_web_server');
const router = require('./web/router.js');

// add routes
nodeWebServer.app.use('/', router);

module.exports = {nodeWebServer};
