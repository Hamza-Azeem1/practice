const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')

    }
    if (req.url === '/about') {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About Page')
    }
})

server.listen(1234, () => {
    console.log("Server is listening on port 1234");
})