var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');

var app = express();

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3001;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
