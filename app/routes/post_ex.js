
module.exports = function(app, db) {
    app.post('/post_ex', (req, res) => {
        const example = {
            ex_1: "ex1"
        };
        console.log(req.body);
        db.collection('colName').insertOne(example).then(error => {
            console.log(error);
        });
        return res.send(200);
    });
};