module.exports = function(uri){

	var mongoose = require('mongoose');

	mongoose.connect('mongodb://' + uri);

	mongoose.connection.on('connected', function(){
		console.log('Conectado ao banco de dados');
	});

	mongoose.connection.on('error', function(error){
		console.log('Erro na conexão com o banco ' + error);
	});
}
