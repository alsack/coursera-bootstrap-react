const express = require('express');

const staticRoutes = require('./staticRoutes');

const router = new express.Router();

// serve file from static locations
staticRoutes.forEach((route) => {
  router.use(route.path, express.static(route.dir));
});

// If nothing else handles the request, send a 404 not found
router.use('/', (req, res) => {
  res.send(404);
});

module.exports = router;
