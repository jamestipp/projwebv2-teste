var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/tipp');

http.createServer(function(req, res){
		res.end('teste');
}).listen(3000, function(){
	console.log('Servidor iniciado.');
});
