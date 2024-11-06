const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000; 
app.set('port', port);

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '../resources/views'));

module.exports = app;