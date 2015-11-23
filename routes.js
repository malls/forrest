var express = require('express');
var fs = require('fs-extended');
var router = express.Router();

var files = fs.readdirSync('./public/images/marble/');

var links = [
    {
        url: 'mailto:_@forrestalmasi.com',
        text: '_@forrestalmasi.com'
    },
    {
        url: 'http://twitter.com/forrestalmasi',
        text: 'twitter.com/forrestalmasi'
    },    {
        url: 'http://twitter.com/everyphotoshop',
        text: 'twitter.com/everyphotoshop'
    },
    {
        url: 'http://raretides.tumblr.com',
        text: 'raretides.tumblr.com'
    },    {
        url: 'http://raretines.tumblr.com',
        text: 'raretines.tumblr.com'
    },
    {
        url: 'https://github.com/malls',
        text: 'github.com/malls'
    },
    {
        url: 'http://isitflagday.us/',
        text: 'isitflagday.us'
    },
    {
        url: 'http://gardenparty.club',
        text: 'gardenparty.club'
    }
];

var friends = [
    {
        url: 'http://dallegretto.com/',
        text: 'dan allegretto'
    },
    {
        url: 'http://www.albedell.com/',
        text: 'al bedell'
    },
    {
        url: 'http://sammckinniss.com/',
        text: 'sam mckinniss'
    },
    {
        url: 'http://brycegrat.es/',
        text: 'bryce grates'
    },
    {
        url: 'http://www.sigridlauren.com/',
        text: 'sigrid lauren'
    },
    {
        url: 'http://kerrydoran.net/',
        text: 'kerry doran'
    },
    {
        url: 'http://mikepepi.com/',
        text: 'mike pepi'
    },
    {
        url: 'http://tcour.com/',
        text: 'brian droitcour'
    },
    {
        url: 'http://jasonrivette.com/',
        text: 'jason rivette'
    },
    {
        url: 'http://darciewilder.com/',
        text: 'darcie wilder'
    }
];

function getMarble() {
    var index = Math.floor((Math.random() * (files.length - 1) + 1));
    return files[index];
}

/* GET home page. */
router.get('/', function(req, res) {
    var marble = getMarble();
    res.render('parking', {marble: marble});
});

router.get('/friends', function(req, res) {
    var marble = getMarble();
    res.render('links', {marble: marble, links: friends, heading: 'these are my friends check out their websites'});
});

router.get('/links', function(req, res) {
    var marble = getMarble();
    res.render('links', {marble: marble, links: links, heading: 'please enjoy these links to stuff by me'});
});

    
// http://www.maskmagazine.com/the-substance-issue/life/interview-the-thread    
// http://dismagazine.com/disco/51435/the-real-remixes-hit-the-beach/

// router.get('/guestbook', function(req, res) {
//     var marble = getMarble();
//     res.render('guestbook', {marble: marble});
// });

// router.post('/guesbook', function(req, res) {
//     var marble = getMarble();
//     res.render('guestbook', {marble: marble});
// });

router.get('/persona', function(req, res) {
    var images = new Array();

    fs.listFiles('public/images/persona', { recursive: 1 }, function (err, files) {
        if (err) throw err;
        for (var i = 0; i < files.length; i++) {
            files[i] = 'images/persona/' + files[i];
        }
        res.render('persona', {images: files});
    });

});

// angular thing
// router.get('/:view', function(req, res) {
//   res.render(req.params.view);
// });

module.exports = router;
