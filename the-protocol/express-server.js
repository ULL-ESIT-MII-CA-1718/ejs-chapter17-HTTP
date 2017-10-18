var express = require('express')
var app = express()
var util = require('util');

// https://nodejs.org/api/path.html
var path = require('path');

// Serve static files
app.use(express.static('.')); // http://expressjs.com/api.html#app.use#

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
app.get('/chuchu', function(req, res){
  console.log(req.query);
  let result = Object.assign(req.query, {result: 99});
  res.send(result);
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var msg = req.body.msg;
  console.log("MSG = "+msg);
  res.header({
    chuchu: 'tutu',
    "subject":"Computación Avanzada 17/18"
  });
  var result = 8;
  res.send({msg: result});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

