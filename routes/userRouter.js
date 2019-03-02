let express = require('express'); // Load Express
// Initialize Firebase
let admin = require("firebase-admin");
admin.initializeApp({ // Firebase admin credentials
  credential: admin.credential.cert("path/to/cert-file.json"),
  databaseURL: "https://yourapphere.firebaseio.com"
});
// var User = require('./../models/userModel');
let usersController = require('./../controllers/usersController')(admin);

let userRouter = express.Router();

// /users/
userRouter.route('')
	.get(usersController.get)
	.post(usersController.add);

// /users/:id
userRouter.route('/:id')
	.get(usersController.getById)
	.put(usersController.update)
	.patch(usersController.patch)
	.delete(usersController.del);

// /users/email/
userRouter.route('/email')
	.post(usersController.getByEmail);

module.exports=userRouter;
