var mymodule = require('./makeitmodular_module.js');
var dir = process.argv[2];
var filter = process.argv[3];
mymodule(dir, filter, function(err, data){
	if(err){
		return console.error("Error has occurred: "+err);
	}
	
	for(var i = 0; i < data.length; i++){
		console.log(data[i]);
	}
	
});