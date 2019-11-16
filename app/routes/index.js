
const getRoutes = require('./get_ex');
const postRoutes = require('./post_ex');

module.exports = function(app, db) {
    getRoutes(app, db);
    postRoutes(app, db);
};