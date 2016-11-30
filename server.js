var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/tipp');

http.createServer(app).listen(8081, function(){
	console.log('Servidor iniciado.');
});
