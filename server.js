const express = require('express');
const config = require('./config');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = config.port;

const settings = {
    autoReconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const client = new MongoClient(config.url, settings);
client.connect(error => {
    if (error) throw error;
    const database = client.db(config.dbName);
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});