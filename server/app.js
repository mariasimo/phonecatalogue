require('dotenv').config();

const express  = require('express');
const cors     = require('cors')
const app      = express();
 
app.use(cors())

const index = require('./routes/index');
app.use('/', index);

module.exports = app;
