var express = require('express')
var app = express()
var util = require('util');

// https://nodejs.org/api/path.html
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs'); // http://expressjs.com/api.html#app.set

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '

// Serve static files
app.use(express.static('.')); // http://expressjs.com/api.html#app.use#
app.use(expressLayouts);

// Luego la consultamos con app.get('port')
app.set('port', (process.env.PORT || 8080)); 

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */

// instruct the app to use the `bodyParser()` middleware for all routes
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));


// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  res.sendFile('index.html');
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.get('/example/message.html', function(req, res){
  console.log("req.query = " + util.inspect(req.query));
  let context = {};
  Object.assign(context, req.query, {title: "EJS. Chapter 17: HTTP. Browsers and HTTP"})
  res.render('response', context);
});

app.post('/example/message.html', function(req, res){
  console.log("req.body = " + util.inspect(req.body));
  let context = {};
  Object.assign(context, req.body, {title: "EJS. Chapter 17: HTTP. Browsers and HTTP"})
  res.render('response', context);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

