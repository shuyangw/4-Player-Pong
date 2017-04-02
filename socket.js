var sio = io.listen(app);
sio.configure(function(){
	sio.set('log level', 0);
	sio.set('authorization', function(handshakeData, callback){
		callback(null, true);
	});
});

//Canns on client connection
sio.sockets.on('connection', function(client){
	client.userid = UUID();
	client.emit('onconnected', {id: client.userid});
	console.log('socket.io :: player ' + client.userid + ' connected');

	//On user disconnection
	client.on('disconnect', function(){
		console.log('socket.io :: client disconnected ' + client.userid);
	})
});
