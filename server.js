var express = require('express');
var app = express();

var port = process.env.PORT || 5500;

// Serve static files
app.use(express.static(__dirname));

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);