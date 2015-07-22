var http = require('http');
var fs = require('fs');
var map = require("through2-map");

var port = process.argv[2] || 8000;

var server = http.createServer(function(req, res){
	if(req.method === "POST"){ 
 		var map = require('through2-map')
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	 }
});
server.listen(port);