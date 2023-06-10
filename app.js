var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'shoes'
  });

  app.get('/data', (req, res) => {
    const query = 'SELECT * FROM your_table';
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
