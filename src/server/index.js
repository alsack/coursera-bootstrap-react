const path = require('path');
const fs = require('fs');

const createServer = require('./web/createServer.js');
const router = require('./web/routes.js');

//load process.env variables from .env file
require('dotenv').config();

const port = process.env.PORT;
const sslKeys = undefined;

if(process.env.HTTPS === 'true') {
   sslKeys = {
    cert: fs.readFileSync(path.join(__dirname, 'certs/fullchain.pem')),
    key: fs.readFileSync(path.join(__dirname, 'certs/privkey.pem'))
  }
}

//create server.
const {app, server} = createServer(port, sslKeys);
//add routes
router(app);

module.exports = {app, server};