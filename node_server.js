var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = "Your name is " + q.firstname + ", and surname is " + q.lastname;
    res.end(txt);
}).listen(8181);