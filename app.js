var express = require('express');
var app = express();

app.set('port', 80);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    Console.log('Magic happens on port ' + port);
});