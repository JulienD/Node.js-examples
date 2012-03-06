// Load the http module to create an http server.
var http = require('http');

// Number of visits.
var visits = 0;

// Setup an http server.
var server = http.createServer(function (request, response) {
	// Display in the consol each connection to the server.
  	console.log('New connection - STATUS: ' + response.statusCode);
  	visits++;
  	response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had ' + visits + ' visits!\n');
    response.end();
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");