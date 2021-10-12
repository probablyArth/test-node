const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.end(`Home page`)
    }
    if (req.url === "/about") {
        // BLOCKING CODE!!!
        for (let i=0; i< 100; i++) {
            for (let j = 0; j<100; j++) {
                console.log(`${i} ${j}`)
            }
        }
    }
    res.end('Error page')
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000')
})