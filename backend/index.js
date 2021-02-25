const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const test = require('./server/api/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/test',test);

module.exports = app;