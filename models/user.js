var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
	id: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	token: {type: String}
});

User.methods.verifyPassword = function(password, callback) {
	if(password !== this.password)
		return callback("Password is not match: " + password + " vs " + this.password);
	return callback(null, true);
}

module.exports = mongoose.model("User", User);