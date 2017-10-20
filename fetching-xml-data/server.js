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

app.get("/cats.json", (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.send({sakura: "siamese", mika: "calico"});
});

app.get("/cats.xml", (request, response) => {
  response.setHeader('Content-Type', 'text/xml');
  response.send(`
      <cats>
        <cat>
          <name>
            sakura
          </name>
          <breed>
            siamese
          </breed> 
        </cat>
      </cats>
  `);
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
