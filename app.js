require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/bodsy-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Setup a default catch-all route that send back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
