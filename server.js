var 
	gameport = process.env.PORT || 4004,
	io = require('socket.io'),
	express = require('express'),
	UUID = require('node-uuid'),
	verbose = false,
	app = express.createServer();

app.listen(gameport);
console.log('Express :: Listening on port ' + gameport);
app.get('/', function(req, res){
	res.sendfile(__dirname+  '/simplest.html');
});

app.get('/*', function(req, res, next){
	var vile = req.params[0];
	if(verbose)
		console.log('\t :: Express :: file requested : ' + file);
	res.sendfile(__dirname + '/' + file);
});