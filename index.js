// Import the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // OK status
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Node.js!\n');
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
