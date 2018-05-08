const express = require("express");
const rewrite = require("express-urlrewrite");
const app = express();
const path = require("path");


app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});




app.listen(3000, function () {
  console.log("App listening on port 3000!");
});