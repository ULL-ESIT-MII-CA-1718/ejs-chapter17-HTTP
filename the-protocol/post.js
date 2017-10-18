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

