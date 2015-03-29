var koa = require('koa')
, route = require('koa-route')
, app   = module.exports = koa()
, monk  = require('monk')
, wrap  = require('co-monk')
, db    = monk('localhost/test_app')
, data  = wrap(db.get('test_app'));

app.use(route.get('/test', list));

function *list(){	
	var res   = yield data.find({});
	console.log( 'res: ' + res);
	this.body = res;
}

if(!module.parent) app.listen(3000);