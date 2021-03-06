const express = require('express');

const app = express();

app.use(require('./course'));
app.use(require('./program'));

module.exports = app;