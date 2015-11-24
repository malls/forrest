var express = require('express');
var fs = require('fs-extended');
var router = express.Router();
var lib = require('./lib/library');
var files = fs.readdirSync('./public/images/marble/');

/* GET home page. */
router.get('/', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('parking', {marble: marble});
});

router.get('/friends', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('links', {marble: marble, links: lib.friends, heading: 'these are my friends check out their websites'});
});

router.get('/links', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('links', {marble: marble, links: lib.links, heading: 'please enjoy these links to stuff by me'});
});

router.get('/press', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('links', {marble: marble, links: lib.press, heading: 'stuff written about things i\'ve done'});
});

router.get('/guestbook', function(req, res) {
    var marble = getMarble();
    res.render('guestbook', {entries: entries, marble: marble});
});

router.post('/guesbook', function(req, res) {
    var marble = getMarble();
    res.render('guestbook', {entries: entries, marble: marble});
});
    

// router.get('/persona', function(req, res) {
//     var images = new Array();
//     fs.listFiles('public/images/persona', { recursive: 1 }, function (err, files) {
//         if (err) throw err;
//         for (var i = 0; i < files.length; i++) {
//             files[i] = 'images/persona/' + files[i];
//         }
//         res.render('persona', {images: files});
//     });
// });

// angular thing
// router.get('/:view', function(req, res) {
//   res.render(req.params.view);
// });

module.exports = router;
