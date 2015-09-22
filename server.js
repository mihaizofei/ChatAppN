var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
 
var server = express();

server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('comments.json', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

server.post('/comments.json', function(req, res) {
  fs.readFile('./dist/comments.json', function(err, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('./dist/comments.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(comments);
    });
  });
});
 
var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});