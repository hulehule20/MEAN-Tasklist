var express = require('express'),
	router 	= express.Router();

router.get('/tasks', function(req,res,next) {
	res.send('TASK API');
});

module.exports = router;