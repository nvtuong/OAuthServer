var User = require("../models/user.js");

module.exports.getAllUser = function(req, res) {
	User.find({}, function(err, result) {
		if(err)
			res.send(err);
		else
			res.send(result);
	});
}

module.exports.getUser = function(req, res) {
	console.log("Req: " + req.body.key);
	var id = req.params.userID;
	User.find({id: id}, function(err, result) {
		if(err)
			res.send(err);
		else
			res.send(result);
	});
}

module.exports.postUser = function(req, res) {
	var user = new User(req.body.id, req.body.username, req.body.password, req.body.token);
	user.save(function(err) {
		if(err)
			res.send(err);
		else
			res.send(user);
	});
}

module.exports.putUser = function(req, res) {
	var id = req.params.id;
	User.find({id: id}, function(err, result) {
		result.username =  req.body.username;
		result.password = req.body.password;
		result.token = req.body.token;
		result.save(function(err) {
			if(err)
				res.send(err);
			else 
				res.send(result);
		});
	});
}

module.exports.deleteUser = function(req, res) {
	var id = req.params.id;
	User.delete({id: id}, function(err) {
		if(err)
			res.send(err);
		else
			res.send("success");
	});
}