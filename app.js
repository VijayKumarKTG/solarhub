'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var app = express();

require('dotenv').config();
app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

//Index page (static HTML)
app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404).type('text').send('Not Found');
});

//500 Not Found Middleware
app.use(function (req, res, next) {
  res.status(500).type('text').send('Internal Sever Error.');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port ' + process.env.PORT);
  if (process.env.NODE_ENV === 'test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch (e) {
        var error = e;
        console.log('Tests are not valid:');
        console.log(error);
      }
    }, 3500);
  }
});

module.exports = app;
