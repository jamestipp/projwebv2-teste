var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var modelUsuario = mongoose.model('Usuario');

module.exports = function(app) {

	var api = {};

	modelUsuario.validaSenha = function(senha){
			return senha;
	};

	api.adiciona = function(req, res) {
		var hash = bcrypt.hashSync(req.body.senha, bcrypt.genSaltSync(9));
		req.body.senha = hash;
		modelUsuario.create(req.body)
			.then(function(usuario){
				res.json(usuario);
				console.log('Temos um novo cadastrado');
			}, function(error){
				res.status(500).json(error);
			});
	};

	api.busca = function(req, res) {
			var email = req.body.email;
			modelUsuario.findOne({"email":email})
			.then(function(usuario){
				if (usuario == null) {
					res.status(404).json();
				}
				else {
					if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
						res.json(usuario);
					}
					else {
						res.status(404).json();
					}
				}
			}, function(error){
				res.status(404).json(error);
			});
	};

	api.atualizaLista = function(req, res){
			var id = req.body.usuario._id;
			var lista = req.body.minhaLista;
			var nomeLista = req.body.nomeLista;

			modelUsuario.findOne({_id: id}, function(err, object){
						object.listas.push({nomeLista : nomeLista, lista : lista});
						object.save(function(err, sucess){
								if (err) {
										console.log(err);
										res.status(500).json(error);
								}
								else{
										res.send(sucess);
								}
						});
			});
	};

	api.atualizaListaRemovida = function(req, res){
			modelUsuario.findOne({_id : req.body.usuario._id}, function(err, object){
						for(var i = object.listas.length - 1; i >= 0; i--) {
								if(object.listas[i].nomeLista == req.body.lista.nomeLista) {
									 object.listas.splice(i, 1);
								}
						}

						object.save(function(err, sucess){
								if (err) {
										console.log(err);
										res.status(500).json(error);
								}
								else{
										res.send(sucess);
								}
						});
			});
	};

	api.buscaUm = function(req, res){
			modelUsuario.findById(req.params.id)
			.then(function(usuario){
				res.json(usuario);
			}, function(error){
				console.log(error);
				res.status(404).json(error);
			});
	};

	return api;
};
