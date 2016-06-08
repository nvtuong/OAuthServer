var passport = require("passport");
var BasicStrategy = require("passport-http").BasicStrategy;
var User = require("../models/user.js");

passport.use(new BasicStrategy(function(username, password, callback) {
	User.findOne({username: username}, function(err, user) {
		if(err)
			return callback(err);
		if(user == null)
		{
			console.log("There is no username: " + username);
			return callback(err);
		}
		else {
			user.verifyPassword(password, function(err, isMatch) {
				if(err)
					return callback(err);
				if(!isMatch) 
					return callback(null, false);
				return callback(null, user);
			});
		}
	});
}));

module.exports.isAuthenticated = passport.authenticate('basic', {session: false});