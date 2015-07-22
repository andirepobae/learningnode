var fs = require("fs");
var path = require("path");

module.exports = function (dirname, ext, callback) {
	fs.readdir(dirname, function(err, list){
		if(err){
			return callback(err);
		}
		if(ext){
			//replace this with array filter fn
			for(var i = 0; i < list.length; i++){
				if(path.extname(list[i]) !== "."+ext){
					list.splice(i);
				}
			}
		}
		callback(null, list);
	});
}