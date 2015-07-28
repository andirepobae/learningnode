var fs = require("fs");
var async = require("async");
var http = require("http");

var path =  process.argv[2];

async.waterfall([
		function(cb){
			fs.readFile(path, 'utf8', function(err, data){
				if(err){
					return cb(err);
				} 
				cb(null, data);
			});
		},
		function(url, cb){
			var body = '';
			http.get(url, function(res){
				
				res.on('data', function(chunk){
					body += chunk.toString();
				});
				res.on('end', function(){
					cb(null, body);
				});
			}).on('error', function(err) {
				cb(err);
			});
		}
	], function(err, result){
		if (err){
			return console.error(["error",err]);
		}
		console.log(result); 
	}
);
