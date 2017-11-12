// async.js 可以工作，这就是可以运行但是很简陋的代码。因为现在是3个URL，
// 如果是10个URL甚至更多的时候，代码就会变得非常的难看，也根本不显示。所以
// 需要重新写

const http = require('http')
let results = []

for (let i = 0; i < 3; i++) {
    httpGet(i)
}

let count = 0
function httpGet(index) {
    http.get(process.argv[2+index], (res) => {
        let body = ''
        res.on('data', (chunk) => {
            body += chunk;
        })
        res.on('end', () => {
            results[index] = body.toString()
            count++    
            if (count == 3) {
                printData()
            }
        })
    })
}

function printData() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}
