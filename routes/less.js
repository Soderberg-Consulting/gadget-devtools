var express = require('express');
var router = express.Router();
var less = require('less');
var bodyParser = require('body-parser')
var cssParser = bodyParser.text({ type: 'text/css' });

router.post('/', cssParser, function(req, res, next) {
	less.render(req.body, function (e, output) {
		res.send(output.css);
	});
});

module.exports = router;
