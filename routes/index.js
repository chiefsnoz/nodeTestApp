var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', jsonMsg: 'One cool dude...' });
});

module.exports = router;
// modified with this comment