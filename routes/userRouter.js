var express = require('express');
var admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert("path/to/cert-file.json"),
  databaseURL: "https://yourapphere.firebaseio.com"
});
// var User = require('./../models/userModel');
var usersController = require('./../controllers/usersController')(admin);

var userRouter = express.Router();

userRouter.route('')
	.get(usersController.get)
	.post(usersController.add);

userRouter.route('/:id')
	.get(usersController.getById)
	.put(usersController.update)
	.patch(usersController.patch)
	.delete(usersController.del);

userRouter.route('/email')
	.post(usersController.getByEmail);

module.exports=userRouter;