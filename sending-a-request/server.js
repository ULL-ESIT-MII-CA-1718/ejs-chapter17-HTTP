"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname));

/*
app.get('/', (request, response) => {     
  response.render('index', { title: 'CSV Analyzer' });
});
*/

app.get("/chuchu/xmlhttp_info.txt", (request, response) => {
  console.log(`request.get('chuchu') = ${request.get('chuchu')}`);  // Tutu!, Chazam!
  /* 
   *  A Boolean property that is true if the request’s X-Requested-With header field is “XMLHttpRequest
   */
  console.log(`request.xhr = ${request.xhr}`); // true

  /*
   * res.append(field [, value]) 
   * Appends the specified value to the HTTP response header field.
   * If the header is not already set, it creates the header with the
   * specified value. The value parameter can be a string or an array.
   * Note: calling res.set() after res.append() will reset the previously-set header value.
   */
  response.append('MyServerSetHeader', 'Success is walking from failure to failure with no loss of enthusiasm');
  response.send("Response from server: <b>Hello client!</b>" );
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
