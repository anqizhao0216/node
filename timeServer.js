const net = require('net')


const time = new Date()
let result = ''

result = time.getFullYear() + '-' + (time.getMonth()+1) + '-'+ time.getDate() + ' '
+ time.getHours() + ':' + '0'+time.getMinutes() + '\n'

const server = net.createServer((socket) => {
    socket.write(result)
    socket.end()
})

server.listen(Number(process.argv[2]))
