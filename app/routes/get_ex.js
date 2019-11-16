
module.exports = function(app, db) {
    app.get('/get_ex', (req, res) => {
        db.collection('colName').find().toArray(function(err, results) {
            return res.json(results)
        });
    });
};