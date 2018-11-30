const bootstrapRoutes = require('./bootstrapRoutes');

/**
 * Perform project routing
 * @param {ExpressApp} app the express router
 */
module.exports = function(app) {
    app.use('/coursera-bootstrap-react/', bootstrapRoutes);
}