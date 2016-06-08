var express = require("express");
var bodyParser = require("body-parser");
var db = require("./database/mongodb.js");
var userController = require("./controllers/user.js");
var passport = require("passport");
var authController = require("./controllers/auth.js");

var app = express();
var router = express.Router();
var port = 9000;
var urlDB = "mongodb://localhost:27017/oauthserver";

app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: true}));


router.route("/create")
	.post(userController.postUser);

router.route("/getAllUser").get(userController.getAllUser);

router.route("/:userID")
	.get(authController.isAuthenticated, userController.getUser)
	.put(authController.isAuthenticated, userController.putUser)
	.delete(authController.isAuthenticated, userController.deleteUser);

app.use("/api", router);


app.listen(9000, function() {
	console.log("Server is running at 9000");
	db.connectToMongoDB(urlDB);
});
