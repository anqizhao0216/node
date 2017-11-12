const filter = require('./module.js')

const folder = process.argv[2]
const ext = process.argv[3]

filter(folder, ext, function (err, files) {
    if (err) return console.error('there was an error: ', err)

    files.forEach(function (file) {
        console.log(file)
    })
})