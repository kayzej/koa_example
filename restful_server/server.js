var express   = require('express'),
	MongoClient = require('mongodb').MongoClient, 
	format 			= require('util').format,
	fs					= require('fs'),
	validator 	= require( 'json-schema-validation' );
	bodyParser 	= require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.send('Hello Doug');
});

app.post('/insertOption', function(req, res){

	fs.readFile( __dirname + '/schema.json', function (err, data) {
	  if (err) {
	    //throw err; 
	    console.log('error: ' + err);
	  }

 	  var fake_data = { "a" : "boobs" };
	  var schema 		= { "type" : "string" };

	  try{
	  	validator( { a : [ 1, 3 ] }, { type: 'object' }, function(err, result){
	  		console.log( result.result );
	  	});
	  	//console.log(typeof(req.body));
	  	//console.log(req.body);
		  //var v = new Validator();
		  //var validate = v.validate(req.body, data);
		  //var validated = v.validate(fake_data, schema);
		  //console.log(validated);
			//var validate = require('jsonschema').validate;
  	  //var val 		 = validate(fake_data, schema);
  		//console.log(val);
			//res.send(val);
		}	
		catch(ex){
			res.send(ex.stack);
			console.log(ex.stack);
		}
	});
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...\n');