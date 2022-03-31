var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (req, res) {
  var urls = url.parse(req.url, true)
  if (urls.pathname === '/') {
    fs.readFile(__dirname + "/dist/index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data)
    })
  } else {
    fs.readFile(__dirname + "/dist" + req.url, function (err, data) {
      if (err) {
        res.end(data)
      }
    })
  }
  // fs.readFile(__dirname + "/dist/index.html", function (err, data) {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end(data)
  // })
})

server.listen(3000)
