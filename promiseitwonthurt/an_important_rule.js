var q = require("q");

function throwMyGod(){
	throw new Error("OH NOES");
}

function iterate(val){
	console.log(val);
	return val + 1;
}

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,console.log);

