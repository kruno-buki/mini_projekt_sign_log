// --------------------------------------------
// ! OVISNOSTI / DEPENDENCIES
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// --------------------------------------------
// --------------------------------------------
// ! 2 modula koja zahtjevamo za RUTANJE...lokalni fileovi...ne node module 
const indexRouter = require('./routes/indexRouter');
const loginRouter=require('./routes/loginRouter')
const signRouter=require('./routes/signRouter')
// const adminRouter=require('./routes/adminRouter')
// const userRouter = require('./routes/user');
const errorRouter=require('./routes/errorRouter');
// --------------------------------------------
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// --------------------------------------------
// ! korištenje ruta koje smo učitali
app.use('/', indexRouter);
app.use('/sign', signRouter);
app.use(loginRouter);
// app.use('/login', loginRouter);
// app.use('/admin',loginRouter)
// app.use('/user', userRouter);

app.use('/error',errorRouter);
// --------------------------------------------
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// --------------------------------------------
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// --------------------------------------------
const PORT = 5000

app.listen(PORT, (err) => {
  if (!err)
    console.log('SPOJENI!');
  else
    console.log('Neka greška!!!');
})
module.exports = app;