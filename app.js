const http = require('http')

const server = http.createServer((req, res) => {
    console.log(res);
    res.write('Hello! I am server!')
    res.end()
})

server.listen(1234)