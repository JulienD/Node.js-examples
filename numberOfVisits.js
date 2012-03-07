// Load the http module to create an http server.
var http = require('http');

// Number of visits.
var visits = 0;
// Number of visitors.
var visitors = 0;
// Number of current.
var currentVisitors = 0;

// Setup an http server.
var server = http.createServer(function (request, response) {
  	visits++;
  	response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had ' + visits + ' visits for ' + visitors + ' visitors today\n');
    response.write('Currently we have ' + currentVisitors + ' visitors\n');
    response.end();
});

server.on('connection', function (socket) { 
	visitors++;
	currentVisitors++;
	// Display each connection to the server in the console.
	console.log('New connection');
});

server.on('close', function (errno) { 
	currentVisitors--;
	console.log('Connection closed');	
});


// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");