var http = require('http');

var options = {
	/* For the most part, a client or server decides which headers to
	include in a request or response, though a few headers are required.
	For example, the Host header, which specifies the hostname, should
	be included in a request because a server might be serving multiple
	hostnames on a single IP address, and without that header, the
	server won’t know which host the client is trying to talk to.
	*/
  host: 'localhost',
  port: '8080',
  path: '/chuchu/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
    //console.log(chunk);
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
