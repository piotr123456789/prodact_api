var dote = require('dotenv');
dote.config({ path: '.env'});

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var passport = require('./config/passport');
passport();
// const mongooseDB = require('./connect/connect');
// const mongooseDB2 = require('./connect/connectadmin');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
const upload = require('express-fileupload');


// datebase  connect//
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on("error",function(){

console.log('wystopił bład podczas loczenia sie z baza danych');

});
db.once('open',function(){

console.log('połoczenie zostało otwarte');

});

////////////////////////
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// mideware //
app.use(logger('dev'));
app.use(express.json());
app.use(upload());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser({limit: '200mb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/show', usersRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
