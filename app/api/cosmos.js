var mongoose = require('mongoose');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlHttp = require("xmlhttprequest").XMLHttpRequest;
var modelProduto = mongoose.model('Produto');

module.exports = function(app) {

	var api = {};

	api.produtoCosmos = function(req, res){
	xmlHttp = new XMLHttpRequest();
	var url = "https://api.cosmos.bluesoft.com.br/gtins/"+req.params.barcode;
	var cosmos;

		xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState==4 && xmlHttp.status==200){
            cosmos = JSON.parse(xmlHttp.responseText);
        }
    }

    xmlHttp.open('GET', url ,false);
    xmlHttp.setRequestHeader('X-Cosmos-Token', 'lDt0qqLSjwUHxvY93rXTRQ');
    xmlHttp.send();

		modelProduto.create(cosmos)
			.then(function(produto){
				res.json(produto);
				console.log('Produto cadastrado');
			}, function(error){
				res.status(500).json(error);
			});
		}

	return api;
};
