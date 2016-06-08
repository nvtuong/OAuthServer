var mongoose = require('mongoose');

module.exports.connectToMongoDB = function(urlPath) {
	mongoose.connect(urlPath);
	mongoose.connection.on('open', function() {
		console.log("Mongoose connected");
	});
}
/*
function createUser(id, username, password, token) {
	var user = new UserModel({id: id, username: username, password: password, token: token});
	user.save();
}

module.exports.createUser = createUser;

module.exports.updateUser = function(id, username, password, token) {
	var user = UserModel.find({id: id}, function(err, result) {
		if(!err) {
			user.username = username;
			user.password = password;
			user.token = token;
			user.save();
		}
	});
}

module.exports.createSampleUsers = function() {
	createUser("1", "user1", "user1", null);
	createUser("2", "user2", "user2", null);
	createUser("3", "user3", "user3", null);
	createUser("4", "user4", "user4", null);
	createUser("5", "user5", "user5", null);
}

module.exports.getSampleUsers = function(callback) {
	UserModel.find({}, callback);
}
*/
