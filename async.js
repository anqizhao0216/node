const http = require('http')
const URL1 = process.argv[2]
const URL2 = process.argv[3]
const URL3 = process.argv[4]

http.get(URL1, (res) => {
    let data1 = ''
    res.on('data', (chunk) => {
        data1 += chunk;
    })
    res.on('end', () => {
        console.log(data1)
        http.get(URL2, (res) => {
            let data2 = ''
            res.on('data', (chunk) => {
                data2 += chunk;
            })
            res.on('end', () => {
                console.log(data2)
                http.get(URL3, (res) => {
                    let data3 = ''
                    res.on('data', (chunk) => {
                        data3 += chunk;
                    })
                    res.on('end', () => {
                        console.log(data3)
                    })
                })
            })
        })
    })
})