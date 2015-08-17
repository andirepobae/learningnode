var q = require("q");

function all(p1, p2) {
	var internal = q.defer();
	var counter = 0;
	var output = [];
	var resolver = function(val){
		counter++;
		output.push(val);
		if(counter === 2){
			internal.resolve(ouput);
		}
	}
	p1.promise.then(resolver, internal.reject);
	p2.promise.then(resolver, internal.reject);

	return internal;
}

var p1 = q.defer();
var p2 = q.defer();

all(p1,p2).promise.then(console.log);

setTimeout(function(){
	p1.resolve("PROMISES");
},200);
setTimeout(function(){
	p2.resolve("FTW");
},200);