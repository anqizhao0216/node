const http = require('http')
const fs = require('fs')

const server = http.createServer(function callback (req, res) {
    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))