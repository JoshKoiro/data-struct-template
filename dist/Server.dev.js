"use strict";

var express = require('express');

var path = require('path');

var app = express();
var port = process.env.PORT || 8000;
app.use(express["static"]('./')); // sendFile will go here

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(port);
console.log('Server started at http://localhost:' + port);