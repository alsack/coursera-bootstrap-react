const express = require('express');
const path = require('path');

const publicPath = path.resolve(__dirname, '../../client/public');
const distPath = path.resolve(__dirname, '../../client/dist');

var router = express.Router();

//serve file from public/dist folders
router.use('/', express.static(publicPath));
router.use('/', express.static(distPath));

//serve files from node_modules
const bootstrapCssDir = path.resolve(__dirname, '../../../node_modules/bootstrap/dist/css');
router.use('/css', express.static(bootstrapCssDir));

//If nothing else handles the request, send a 404 not found
router.use('/', (req, res) => {
    res.send(404);
})

module.exports = router;