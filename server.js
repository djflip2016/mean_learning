const http = require('http');

const server = http.createServer((res,req) => {
    res.setEncoding('this is the end')
})

server.listen(process.env.PORT || 4000);