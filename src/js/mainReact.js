var React = require('react');

var MainContainer = require('./components/MainApp.js');

React.render(
  <MainContainer url="./comments.json" pollInterval="2000"/>,
  document.getElementById('content')
);