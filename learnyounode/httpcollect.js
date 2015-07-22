var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function(response){
	response.pipe(bl(function(err, data){
		 if (err)
          return console.error(err)
		var d = data.toString();
		console.log(d.length);
		console.log(d);
	}));
});

