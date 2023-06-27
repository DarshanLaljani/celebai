const http = require('http');
const fs = require('fs');

const hostname = '192.168.0.100'; // Replace with your server's IP address
const port = 6000; // Port number to access all servers

// List of file paths for the 25 JavaScript files
const filePaths = [
  '\public\amitabhbachan.js',
  '/path/to/file2.js',
  // ... Add paths for the other 23 files here
  '/path/to/file25.js'
];

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Retrieve the requested file path
  const filePath = req.url;

  // Check if the requested file path exists in the array
  if (filePaths.includes(filePath)) {
    // Read the contents of the requested JavaScript file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File Not Found');
  }
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
