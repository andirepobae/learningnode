var http = require('http');
var fs = require('fs');

var port = process.argv[2] || 8000;

var server = http.createServer(function(req, res){
	res.writeHead(200, { 'content-type': 'text/plain' });
 	fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(port);