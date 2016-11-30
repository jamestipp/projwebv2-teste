var mongoose = require('mongoose');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlHttp = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(app) {

	var api = {};

  api.lista = function(req, res) {
    xmlHttp = new XMLHttpRequest();
    var url = "http://veran.yebo-api.com.br/api/v2/products";
    var jsonFeio,
    jsonBonito = [{products:[]}, {variants:[]}, {taxons:[]}, {images:[]}];

    function show() {
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState==4 && xmlHttp.status==200){
                    jsonFeio = JSON.parse(xmlHttp.responseText);
                }
            }
            xmlHttp.open('GET', url ,false);
            xmlHttp.send(null);

            jsonFeio.products.forEach(function(item, index){
              jsonBonito[0].products.push({});
              //products ----------------------------------------------------------------
              jsonBonito[0].products[index].id = jsonFeio.products[index].id;
              jsonBonito[0].products[index].name = jsonFeio.products[index].name;
              jsonBonito[0].products[index].description = jsonFeio.products[index].description;
              jsonBonito[0].products[index].slug = jsonFeio.products[index].slug;
              jsonBonito[0].products[index].total_on_hand = jsonFeio.products[index].total_on_hand;
              jsonBonito[0].products[index].available = jsonFeio.products[index].available;
              jsonBonito[0].products[index].meta_description = jsonFeio.products[index].meta_description;
              jsonBonito[0].products[index].meta_keywords = jsonFeio.products[index].meta_keywords;
              jsonBonito[0].products[index].meta_title = jsonFeio.products[index].meta_title;
              jsonBonito[0].products[index].image_ids = jsonFeio.products[index].image_ids;
              jsonBonito[0].products[index].taxon_ids = jsonFeio.products[index].taxon_ids;
              jsonBonito[0].products[index].variants_including_master_ids = jsonFeio.products[index].variants_including_master_ids;
              jsonBonito[0].products[index].price = jsonFeio.products[index].price;
              jsonBonito[0].products[index].raw_price = jsonFeio.products[index].raw_price;
              jsonBonito[0].products[index].cost_price = jsonFeio.products[index].cost_price;
              jsonBonito[0].products[index].raw_cost_price = jsonFeio.products[index].raw_cost_price;
              jsonBonito[0].products[index].discount_price = jsonFeio.products[index].discount_price;
              jsonBonito[0].products[index].raw_discount_price = jsonFeio.products[index].raw_discount_price;
              jsonBonito[0].products[index].discounts = jsonFeio.products[index].discounts;
            //----------------------------------------------------------------------
            });

            jsonFeio.variants.forEach(function(item, index){
              jsonBonito[1].variants.push({});
              //variants -------------------------------------------------------------
              jsonBonito[1].variants[index].id = jsonFeio.variants[index].id;
              jsonBonito[1].variants[index].name = jsonFeio.variants[index].name;
              jsonBonito[1].variants[index].sku = jsonFeio.variants[index].sku;
              jsonBonito[1].variants[index].weight = jsonFeio.variants[index].weight;
              jsonBonito[1].variants[index].height = jsonFeio.variants[index].height;
              jsonBonito[1].variants[index].width = jsonFeio.variants[index].width;
              jsonBonito[1].variants[index].depth = jsonFeio.variants[index].depth;
              jsonBonito[1].variants[index].is_master = jsonFeio.variants[index].is_master;
              jsonBonito[1].variants[index].slug = jsonFeio.variants[index].slug;
              jsonBonito[1].variants[index].description = jsonFeio.variants[index].description;
              jsonBonito[1].variants[index].options_text = jsonFeio.variants[index].options_text;
              jsonBonito[1].variants[index].price = jsonFeio.variants[index].price;
              jsonBonito[1].variants[index].raw_price = jsonFeio.variants[index].raw_price;
              jsonBonito[1].variants[index].cost_price = jsonFeio.variants[index].cost_price;
              jsonBonito[1].variants[index].raw_cost_price = jsonFeio.variants[index].raw_cost_price;
              jsonBonito[1].variants[index].discount_price = jsonFeio.variants[index].discount_price;
              jsonBonito[1].variants[index].raw_discount_price = jsonFeio.variants[index].raw_discount_price;
              jsonBonito[1].variants[index].discounts = jsonFeio.variants[index].discounts;
              jsonBonito[1].variants[index].image_ids = jsonFeio.variants[index].image_ids;
              jsonBonito[1].variants[index].option_value_ids = jsonFeio.variants[index].option_value_ids;
              jsonBonito[1].variants[index].option_types_ids = jsonFeio.variants[index].option_types_ids;
              //-----------------------------------------------------------------------
            });

            jsonFeio.taxons.forEach(function(item, index){
              jsonBonito[2].taxons.push({});
              //taxons ----------------------------------------------------------------
              jsonBonito[2].taxons[index].id = jsonFeio.taxons[index].id;
              jsonBonito[2].taxons[index].name = jsonFeio.taxons[index].name;
              jsonBonito[2].taxons[index].permalink = jsonFeio.taxons[index].permalink;
              jsonBonito[2].taxons[index].parent_id = jsonFeio.taxons[index].parent_id;
              jsonBonito[2].taxons[index].taxonomy_id = jsonFeio.taxons[index].taxonomy_id;
              jsonBonito[2].taxons[index].description = jsonFeio.taxons[index].description;
              jsonBonito[2].taxons[index].icon_url = jsonFeio.taxons[index].icon_url;
              jsonBonito[2].taxons[index].icon_normal_url = jsonFeio.taxons[index].icon_normal_url;
              jsonBonito[2].taxons[index].icon_mini_url = jsonFeio.taxons[index].icon_mini_url;
              jsonBonito[2].taxons[index].taxon_ids = jsonFeio.taxons[index].taxon_ids;
              //----------------------------------------------------------------------
            });

            jsonFeio.images.forEach(function(item, index){
              jsonBonito[3].images.push({});
              //images-----------------------------------------------------------------
              jsonBonito[3].images[index].id = jsonFeio.images[index].id;
              jsonBonito[3].images[index].position = jsonFeio.images[index].position;
              jsonBonito[3].images[index].attachment_content_type = jsonFeio.images[index].attachment_content_type;
              jsonBonito[3].images[index].attachment_file_name = jsonFeio.images[index].attachment_file_name;
              jsonBonito[3].images[index].type = jsonFeio.images[index].type;
              jsonBonito[3].images[index].attachment_updated_at = jsonFeio.images[index].attachment_updated_at;
              jsonBonito[3].images[index].attachment_width = jsonFeio.images[index].attachment_width;
              jsonBonito[3].images[index].attachment_height = jsonFeio.images[index].attachment_height;
              jsonBonito[3].images[index].alt = jsonFeio.images[index].alt;
              jsonBonito[3].images[index].viewable_type = jsonFeio.images[index].viewable_type;
              jsonBonito[3].images[index].viewable_id = jsonFeio.images[index].viewable_id;
              jsonBonito[3].images[index].mini_url = jsonFeio.images[index].mini_url;
              jsonBonito[3].images[index].small_url = jsonFeio.images[index].small_url;
              jsonBonito[3].images[index].product_url = jsonFeio.images[index].product_url;
              jsonBonito[3].images[index].large_url = jsonFeio.images[index].large_url;
              //-----------------------------------------------------------------------
            });

            //0-products
            //1-variants
            //2-taxons
            //3-images
            res.json(jsonBonito);
    }

    show();
  };

	return api;
};
