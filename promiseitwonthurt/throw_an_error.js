var q = require("q");

function parsePromised(string) {
	var p = q.defer();

	try{
		var parsed = JSON.parse(string);
		p.resolve(parsed);
	}catch(e){
		p.reject(e);
	}

	return p.promise;
}



parsePromised(process.argv[2])
	.then(null, console.log);