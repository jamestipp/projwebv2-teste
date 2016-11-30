module.exports = function(app) {

	var apiUsuario = app.api.usuario;
	var apiProduto = app.api.produto;
	var apiLogin = app.api.login;
	var apiCosmos = app.api.cosmos;

	app.route('/cadastra')
		.post(apiUsuario.adiciona);

	app.route('/produtos')
		.get(apiProduto.lista);

	app.route('/usuario')
		.post(apiUsuario.busca);

	app.route('/usuario-timeline/:id')
		.get(apiUsuario.buscaUm);

	app.route('/cadastra-lista')
		.put(apiUsuario.atualizaLista);

	app.route('/atualiza-lista')
		.put(apiUsuario.atualizaListaRemovida);

	app.route('/cosmos/:barcode')
		.get(apiCosmos.produtoCosmos);
};
