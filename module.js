const fs = require('fs')
const path = require('path')

module.exports = function (folder, ext, callback) {
    fs.readdir(folder, function(err, file) {
        if (err) return callback(err)

        file = file.filter(function (data) {
            return path.extname(data) === '.' + ext
        })

        callback(null, file)
    })
}