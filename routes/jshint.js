var express = require('express');
var router = express.Router();
var jshint = require('jshint');
var bodyParser = require('body-parser')
var jsParser = bodyParser.text({ type: 'text/javascript' });

router.post('/', jsParser, function(req, res, next) {
  jshint.JSHINT(req.body);
  console.log(jshint.JSHINT.data());
  res.send(jshint.JSHINT.data());
}); 

module.exports = router;
