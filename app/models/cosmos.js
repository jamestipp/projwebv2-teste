var mongoose = require('mongoose');

//criando o esquema para o produto
var schema = mongoose.Schema({
	description: {
		type: String,
		required: true
	},
	gtin: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		required: true
	}
});

mongoose.model('Produto', schema);
