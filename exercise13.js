const http = require('http')
let url = require('url')
const port = process.argv[2]

const parseTime = function (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixTime(time) {
  return {unixtime: time.getTime()}
}

const parseQuery = function (url) {
  switch (url.pathname) {
    case '/api/parsetime':
      return parseTime(new Date(url.query.iso))
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso))
    default: return 'please enter a valid endpoint url'
  }
}

http.createServer( (req, res) => {
    if (req.method == 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'})
      url = url.parse(req.url, true)
      res.end(JSON.stringify(parseQuery(url)))
    } else {
      res.writeHead(405)
      res.end()
    }
}).listen(Number(port), () => {
    console.log('Server is listening on http://localhost:%s', port)
})
