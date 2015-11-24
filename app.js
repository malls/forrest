var express = require('express'),
    path = require('path'),
    debug = require('debug'),
    favicon = require('serve-favicon'),
    routes = require('./routes'),
    bodyParser = require('body-parser');

var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(favicon(__dirname + '/public/ssstars_100.ico'));
app.set('view engine', 'jade');
app.use(express.static(path.join('public')));

app.use('/', routes);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
