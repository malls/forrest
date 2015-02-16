var express = require('express'),
    path = require('path'),
    debug = require('debug'),
    favicon = require('serve-favicon'),
    routes = require('./routes');

var app = express();

app.use(favicon(__dirname + '/public/ssstars_100.ico'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});


/* 
    to do:
    1) make favicon
    2) gulp?
    3) angular?
    4) 

*/
