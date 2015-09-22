var React = require('react');

var MainJs = require('./main.js');
var MainContainer = require('./components/app.js');

React.render(
  <MainContainer url="./comments.json" pollInterval="2000"/>,
  document.getElementById('content')
);