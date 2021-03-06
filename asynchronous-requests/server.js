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

app.get("/xmlhttp_info.txt", (request, response) => {
  /* 
   *  A Boolean property that is true if the request’s X-Requested-With header field is “XMLHttpRequest
   */
  console.log(request.xhr); // true
  response.send("Response from server: <b>Hello client!</b>" );
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
