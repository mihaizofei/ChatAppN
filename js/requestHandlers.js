var fs = require("fs");

function chatapp(response) {
	console.log("Request handler 'chatapp' was called.")
	fs.readFile('./../index.html', function(err, data) {
		if (err) { throw err; }
		writeResponse(response, data);
	});
}

function chatapp2(response) {
	console.log("Request handler 'chatapp2' was called.")
	writeResponse(response, "chatapp2")
}

function writeResponse(response, data) {
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(data);
	response.end();
}

exports.chatapp = chatapp;
exports.chatapp2 = chatapp2;