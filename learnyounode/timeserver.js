var net = require('net')

function zeroPad(val, amount){
	amount = amount || 2;
	var stringval = val.toString();
	var len = stringval.length;
	
	var padlen = amount - len;

	var pad ="";
	if(padlen > 0){
		for(var i = 0; i < padlen; i++){
			pad += "0";
		}
	}


	return pad+val;
}

//YYYY-MM-DD hh:mm
function formatDate(date){
	return date.getFullYear()+"-"+
			zeroPad(date.getMonth()+1)+"-"+
			zeroPad(date.getDate())+" "+
			zeroPad(date.getHours())+":"+
			zeroPad(date.getMinutes());
}

var server = net.createServer(function (socket) {
  socket.write(formatDate(new Date()));
  socket.end();
})
server.listen(process.argv[2]);