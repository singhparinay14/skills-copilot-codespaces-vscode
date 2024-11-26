// Create web server
// Create a web server that listens to incoming requests and responds with a message.
// The server should listen to port 3000.

// Create a new server using the createServer method of the http module.
// The server should listen to port 3000 and respond with the message "Hello, world!" to all incoming requests.

var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, world!');
});

server.listen(3000);