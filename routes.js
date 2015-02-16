var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Forrest Almasi <3 <3' });
});

router.get('/:view', function(req, res) {
  res.render(req.params.view);
});

module.exports = router;
