var http = require("http");
var url = require("url");
var port = process.argv[2] || 8000;

var server = http.createServer(function(req, res){
	
 	var urlparts = url.parse(req.url, true);
 	var endpoint = urlparts.pathname.split('/')[2];
 	var d  = new Date(urlparts.query.iso);
 	var json;
 	if(endpoint === "parsetime"){
 		json = {
 			"hour" : d.getHours(),
 			"minute": d.getMinutes(),
 			"second": d.getSeconds()
 		};
 	}else if(endpoint === "unixtime"){
 		json = {
 			"unixtime": d.valueOf()
 		};
 	}

 	if(json){
 		res.writeHead(200, { 'Content-Type': 'application/json' });
	 	res.end(JSON.stringify(json));
	 }else{
	 	res.writeHead(404);
	 	res.end();
	 }
 	
});
server.listen(port);