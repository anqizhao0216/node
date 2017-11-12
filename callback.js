var http = require('http'); // how we require modules

http.createServer(function(request, response) {
    response.writeHead(200); // status code in header
    response.write("Dog is running..."); // response body
    setTimeout(function() {
        response.write("Dog is done. ");
        response.end();
    }, 5000);
}).listen(8080); // listen for connections on this port

console.log('listening on port 8080...');