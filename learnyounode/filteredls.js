var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(err, list){
	
	var ext = process.argv[3];
	if(ext){
		for(var i = 0; i < list.length; i++){
			if(path.extname(list[i]) === "."+ext){
				//console.log(path.extname(list[i]));
				//list.splice(i);
				console.log(list[i]);
			}
		}
	}

	
});