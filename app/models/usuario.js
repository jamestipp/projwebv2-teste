var mongoose = require('mongoose');

//criando o esquema para o usuario
var schema = mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	sobrenome: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	listas: {
		type: Array,
		required: false
	},
	senha: {
		type: String,
		required: true
	}
});

//criando o modelo usuario, utilizando o schema criado acima
mongoose.model('Usuario', schema);
