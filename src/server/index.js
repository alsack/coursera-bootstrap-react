const createServer = require('node_web_server');
const path = require('path');
const fs = require('fs');
const router = require('./web/router.js');

const rootDir = path.resolve(__dirname, '..');

// load process.env variables from .env file
require('dotenv').config();

const port = process.env.PORT;
let sslKeys = undefined;

if (process.env.HTTPS === 'true') {
  sslKeys = {
    cert: fs.readFileSync(path.join(rootDir, process.env.CERT)),
    key: fs.readFileSync(path.join(rootDir, process.env.KEY))
  };
}

// create server.
const nodeWebServer = createServer(port, sslKeys);

// add routes
nodeWebServer.app.use('/', router);

module.exports = {nodeWebServer};
