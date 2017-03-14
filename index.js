/* Web App for Unshackled app */


/// MARK: - Server Initialization
var express = require('express');
var app 	= express();
var port 	= 3000;

app.use(express.static(__dirname));


var server = app.listen(port, function() {
	console.log('Listening on port', port);
});


process.on('SIGTERM', function() {
	console.log("Shutting server down.");
	server.close(function() {
		process.exit(0);
	});
});
