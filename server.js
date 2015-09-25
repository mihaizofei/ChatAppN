var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
 
var server = express();

server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});