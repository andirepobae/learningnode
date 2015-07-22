var q = require('q');
var defer = q.defer();

defer.promise.then(
function(){

},console.log);

setTimeout(defer.reject, 300, "REJECTED!");