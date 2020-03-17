const express = require('express');

const app = express();

const router = require('./controllers/index');

app.use(router);

module.exports = app;
