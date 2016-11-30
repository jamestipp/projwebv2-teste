var express = require('express');
var consign = require('consign');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(express.static('./public'));

//o módulo body-parser possibilita resgatar os dados com o POST
app.use(bodyParser.json());

//consign faz o require de todas as rotas
consign({cwd: 'app'})
	.include('models')
	.then('api')
	.then('routes')
	.into(app);

module.exports = app;
