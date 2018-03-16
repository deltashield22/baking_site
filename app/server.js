const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('./mysql');
const router = require('./routes');

const port = 4040;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Mehtods", "GET, POST, PUT, DELETE");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(router);

mysql.connect()
    .then(() => app.listen(port))
    .then(() => console.log(`I guess it works on ${port}`))
    .catch(err => {
        console.error(err);
        process.exit(1);
    })