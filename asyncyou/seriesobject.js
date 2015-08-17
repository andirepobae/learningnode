var async = require("async");
var http = require("http");

async.series({
	requestOne: function(cb){
		var d = "";
		http.get(process.argv[2], function(res){
			res.on("data", function(chunk){
				d += chunk.toString();
			});
			res.on("end", function(){
				cb(null, d);
			});
		}).on("error", function(err){
			cb(err);
		});
	},
	//DRY: this function could be combined with the above
	requestTwo: function(cb){
		var d = "";
		http.get(process.argv[3], function(res){
			res.on("data", function(chunk){
				d += chunk.toString();
			});
			res.on("end", function(){
				cb(null, d);
			});
		}).on("error", function(err){
			cb(err);
		});
	}
}, function(err, results){
	if(err) return console.error(err);
	console.log(results);
});