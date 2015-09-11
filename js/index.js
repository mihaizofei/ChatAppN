var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.chatapp;
handle["/chatapp"] = requestHandlers.chatapp;
handle["/2"] = requestHandlers.chatapp2;
handle["/chatapp2"] = requestHandlers.chatapp2;

server.start(router.route, handle);