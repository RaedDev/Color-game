var express = require('express');
var path = require('path');
var app = express();

app.set('port', 3000);
console.log("Running...");
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

app.get('*', function(req, res){
    res.send("Alles klar");
});