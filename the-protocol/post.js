var http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
  'msg': 'Hello World!'
});


var options = {
  host: 'localhost',
  path: '/',
  port: '8080',
  method: 'POST',
  /*
  The first line of a request or response may be followed by any
  number of headers. These are lines in the form 

  "name: value" 

  that specify extra information about the request or response. These
  headers were part of the example response:

  Content-Length: 65585
  Content-Type: text/html
  Last-Modified: Wed, 09 Apr 2014 10:48:09 GM
  */
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

callback = function(res) {
  var str = ''

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');


  res.on('data', function (chunk) {
    console.log(`BODY: ${chunk}`);
    str += chunk;
    console.log(chunk);
  });

  res.on('end', function () {
    console.log('No more data in response.');
    console.log(str);
  });

}

var req = http.request(options, callback);

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

//This is the data we are posting, it needs to be a string or a buffer
req.write(postData);
req.end();

