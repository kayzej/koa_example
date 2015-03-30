var koa  = require('koa')
, route  = require('koa-route')
, app    = module.exports = koa()
, monk   = require('monk')
, wrap   = require('co-monk')
, db     = monk('localhost/test_app')
, data   = wrap(db.get('test_app'))
, parse  = require('co-body')
, views  = require('co-views')
, jade   = require('koa-jade')
, serve  = require('koa-static')
;

app.use(jade.middleware({ 
	viewPath: __dirname + '/src',
	debug: false,
	pretty: false,
	compileDebug: false,
}));

app.use(serve( __dirname + '/src'));

app.use(route.get('/list', list));
app.use(route.post('/insert', insert));

app.use(route.get('/', function *(next){
	yield this.render('index');
}));

function *list(){	
	var res   = yield data.find({});
	console.log( 'res: ' + res);
	this.body = res;
}

function *insert(){
	var something = yield parse(this);
	console.log(something);
	//var res = yield data.insert(something);
	this.redirect('/');
}

if(!module.parent) app.listen(3000);