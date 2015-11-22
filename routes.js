var express = require('express');
var fs = require('fs-extended');
var router = express.Router();



function getMarble() {
    var files = fs.readdirSync('./public/images/marble/');
    var index = Math.floor((Math.random() * (files.length - 1) + 1));
    console.log(index)
    return files[index];
}

console.log(getMarble());

/* GET home page. */
router.get('/', function(req, res) {
    var marble = getMarble();
    res.render('parking', {marble: marble});
  // res.render('index', { title: 'Forrest Almasi <3 <3' });
});

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

router.get('/:view', function(req, res) {
  res.render(req.params.view);
});

module.exports = router;
