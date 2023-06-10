var express = require('express');
const app = express();
const mysql = require('mysql');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = app;


