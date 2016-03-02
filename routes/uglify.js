var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var uglifyjs = require("uglify-js");
var uglifycss = require('uglifycss');

var jsParser = bodyParser.text({ type: 'text/javascript' });
var cssParser = bodyParser.text({ type: 'text/css' });

/* POST uglify js */
router.post('/js', jsParser, function(req, res, next) {
	var result = uglifyjs.minify(req.body, {fromString: true});
	if (result.code) {
		res.send(result.code);
	} else {
		res.send(result);
	}
});

/* POST uglify css */
router.post('/css', cssParser, function(req, res, next) {
	res.send(uglifycss.processString(req.body));
});

module.exports = router;
