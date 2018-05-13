"use strict"
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

let handler = (req, res) => res.sendFile(__dirname + '/public/index.html');

let routes = ['/', '/about'];

routes.forEach(route => app.get(route, handler));

app.listen(3000, function () {
  console.log("Site listening on port 3000!");
});