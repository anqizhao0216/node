const http = require('http')
const url = process.argv[2]


// the response object is a Node Stream object which can emit events. 
// the three events that are of most interest are: "data", "error" and "end"
http.get(url, function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)