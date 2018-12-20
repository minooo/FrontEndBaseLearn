const fs = require('fs')
const path = require('path')


module.exports = function(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    // response.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8', (err, data) => {
        if (err) {
            throw err
        }
        res.end(data)
    })
}