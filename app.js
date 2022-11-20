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
    console.log(__dirname + "/dist" + req.url)
    fs.readFile(__dirname + "/dist" + req.url, function (err, data) {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data)
      }
    })
  }

  // if (req.url.match(/^\/css\//)) {
  //   var css = fs.readFileSync('./FirstApp/HtmlPages' + req.url);
  //   response.writeHead(200, { "Content-Type": "text/css" });
  //   response.write(css);
  //   response.end();
  //   return;
  // }
  // var html = fs.readFileSync('./FirstApp/HtmlPages/index.html');
  // response.writeHead(200, { "Content-Type": "text/html" });
  // response.write(html);
  // response.end();

  // fs.readFile(__dirname + "/dist/index.html", function (err, data) {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end(data)
  // })
})

server.listen(3000)
