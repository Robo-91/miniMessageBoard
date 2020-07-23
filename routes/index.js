var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'Making Sure this is working!',
		user: 'Robert',
		added: new Date()
	},
	{
		text: 'Hello World!',
		user: 'Sydni',
		added: new Date()
	}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
	res.render('form')
});

router.post('/new', function(req, res, next) {
	const usermessage = req.body.usermessage;
	const username = req.body.username;
	messages.push({text: usermessage, user: username, added: new Date()});
	res.redirect('/');
});

module.exports = router;
