// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' : '',
		'clientSecret' : '',
		'callbackURL' : 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' : '',
		'consumerSecret' : '',
		'callbackURL' : 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' : '',
		'clientSecret' : '',
		'callbackURL' : 'http://localhost:8080/auth/google/callback'
	}

};