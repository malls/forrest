'use strict';

var express = require('express');
var fs = require('fs-extended');
var router = express.Router();
var lib = require('./lib/library');
var guestbook = require('./lib/guestbook');
var files = fs.readdirSync('./public/images/marble/');

/* GET home page. */
router.get('/', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('parking', {
        marble: marble
    });
});

router.get('/friends', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('links', {
        marble: marble,
        links: lib.friends,
        heading: 'these are my friends check out their websites'
    });
});

router.get('/links', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('links', {
        marble: marble,
        links: lib.links,
        heading: 'please enjoy these links to stuff by me'
    });
});

// router.get('/art', function(req, res) {
//     var marble = lib.getRandomFile(files);
//     res.render('links', {marble: marble, links: lib.art, heading: 'here is some art i made'});
// });

router.get('/press', function(req, res) {
    var marble = lib.getRandomFile(files);
    res.render('links', {
        marble: marble,
        links: lib.press,
        heading: 'stuff written about things i\'ve done'
    });
});

router.get('/guestbook', function(req, res) {
    guestbook.render(res);
});

router.get('/guestbook/:id', function(req, res) {
    guestbook.Entry.findByIdAndRemove(req.params.id, function(err) {
        if (err) console.log(err);
        res.redirect('/guestbook');
    });
});

router.post('/guestbook', function(req, res) {
    var body = req.body;
    body.ts = Date.now();
    body.site = lib.makeUrl(body.site);
    if (!body.message || !body.name) {
        guestbook.render(res);
    } else {
        var entry = new guestbook.Entry(body);
        entry.save(function(err) {
            if (err) {
                res.render('404', {
                    marble: marble
                });
            } else {
                guestbook.render(res);
            }
        });
    }
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