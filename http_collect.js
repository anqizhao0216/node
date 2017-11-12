const http = require('http')
const URL = process.argv[2]

http.get(URL, (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; })
    res.on('end', () => {
        rawData = rawData.toString()
        console.log(rawData.length)
        console.log(rawData)
    })
}).on('error', (err) => {
    console.error("Got error: " + err)
})