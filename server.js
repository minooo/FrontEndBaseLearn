const http = require('http')
const handle = require('./src/04-dom-js')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    handle(req, res)
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})