"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 3000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname));


app.get("/xmlhttp_info.txt", (request, response) => {
  //response.append('Access-Control-Allow-Origin', '*');
  response.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.send("Response from server 3000: <b>Hello client!</b>" );
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
