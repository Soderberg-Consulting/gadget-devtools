var express = require('express');
var router = express.Router();
var sass = require('node-sass');
var bodyParser = require('body-parser')
var cssParser = bodyParser.text({ type: 'text/css' });

router.post('/', cssParser, function(req, res, next) {
	var result = sass.renderSync({
		data: req.body
	});
	res.send(result.css);
});

module.exports = router;
