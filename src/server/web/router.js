const express = require('express');
const path = require('path');
const publicPath = path.resolve(__dirname, '../../client/public');

var router = express.Router();

//serve file from public folder
router.use('/', express.static(publicPath));

//serve files from node_modules
const bootstrapCssDir = path.resolve(__dirname, '../../../node_modules/bootstrap/dist/css');
router.use('/css', express.static(bootstrapCssDir));
const jqueryDistDir = path.resolve(__dirname, '../../../node_modules/jquery/dist');
router.use('/dist', express.static(jqueryDistDir));
const bootstrapDistDir = path.resolve(__dirname, '../../../node_modules/bootstrap/dist');
router.use('/dist', express.static(bootstrapDistDir));
const popperDistDir = path.resolve(__dirname, '../../../node_modules/popper.js/dist');
router.use('/dist', express.static(popperDistDir));

//If nothing else handles the request, send a 404 not found
router.use('/', (req, res) => {
    res.send(404);
})

module.exports = router;