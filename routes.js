var express = require('express');
var fs = require('fs-extended');
var router = express.Router();
 

/* GET home page. */
router.get('/', function(req, res) {
    res.render('parking');
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
