// use http module as a variable
const http = require('http');

// Create server with the http variable
// createServer() accepts a callback function which takes request and response as arguments
const server = http.createServer(function (req, res) {

    // Header with status code and content-type
    // res.writeHead(200, { 'content-type': 'text/plain' })
    // res.writeHead(200, { 'content-type': 'application/json' })
    res.writeHead(200, { 'content-type': 'text/html' })

    // Send some information
    // res.end('Welcome to Zuri Internship!');
    /* res.end(`
        {
            'name': 'Gideon',
            'age': 24,
            'sex': 'Male',
            'location': 'Enugu'
        }
    `); */
    res.end(`
        <html>
            <body>
                <h1>Good Morning, My Neighbour!</h1>
                <h2>How are you doing?</h2>
            </body>
        </html>
    `)
});

// Create a port the server can listen on
server.listen(7070, '127.0.0.1');

console.log('Yes, you have created a server!');