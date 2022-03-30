var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
  fs.readFile(__dirname + "/dist/index.html", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(data)
  })
})

server.listen(3000)
