// Load the net module to create a tcp server.
var net = require('net');

// Setup a tcp server
var server = net.createServer(function (socket) {
  // Display a message to the console and to client on connection.
  socket.on('connect', function() {
  	console.log('client connected');
    socket.write('hello\n\r');
  });

  // Display a message to the console on disconnection.
  socket.on('end', function() {
    console.log('client disconnected');
  });
});

// Fire up the server bound to port 7000 on localhost
server.listen(7000, function() {
  // Put a friendly message on the terminal
  console.log("Server running at http://127.0.0.1:8000/ | Hit CTRL + C to shutdown");
});
