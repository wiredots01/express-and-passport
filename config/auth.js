// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' : '769952913095899',
		'clientSecret' : '4eba2a3ef04967c5c255442a0ba0d7d9',
		'callbackURL' : 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' : 'your_app_key',
		'consumerSecret' : 'your_app_key',
		'callbackURL' : 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' : 'your_app_key',
		'clientSecret' : 'your_app_key',
		'callbackURL' : 'http://localhost:8080/auth/google/callback'
	}

};