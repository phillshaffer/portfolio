const express = require("express");
const app = express();
const path = require("path");

//import express from 'express';
//import path from 'path';
//const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});