var fs = require('fs');

var body = fs.readFileSync(process.argv[2], 'utf8');

//var body = buf.toString();
var lines = body.split("\n").length - 1;
console.log(lines);