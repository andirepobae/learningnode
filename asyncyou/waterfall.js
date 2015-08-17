var fs = require("fs");
var async = require("async");
var http = require("http");

var path =  process.argv[2];

async.waterfall([
		//callback
		function(cb){
			fs.readFile(path, 'utf8', function(err, data){
				if(err){
					//err
					return cb(err);
				}
				//no err, return data
				cb(null, data);
			});
		},
		//no err, arguments, callback
		function(url, cb){
			var body = '';
			http.get(url, function(res){
				res.on('data', function(chunk){
					body += chunk.toString();
				});
				res.on('end', function(){
					//err, then arguments
					cb(null, body);
				});
			}).on('error', function(err) {
				//err only
				cb(err);
			});
		}
		//err, result
	], function(err, result){
		if (err){
			return console.error(["error",err]);
		}
		console.log(result); 
	}
);
