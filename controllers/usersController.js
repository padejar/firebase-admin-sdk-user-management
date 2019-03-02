 let userController = (Admin) => {
	// Add user to firebase
	let add = async (req,res) => {
		let email = req.body.email;
		let password = req.body.password;

		let user = await Admin.auth().createUser({
			email: email,
			password: password
		})
		.then((userRecord) =>{
			return userRecord.toJSON();
		})
		.catch((error) => {
			console.log(error);
			return false;
		});

		if (user) {
			res.setHeader('Content-Type','application/json');
			res.status(201);
			res.send(user);
		} else {
			res.status(500);
			res.send('Error');
		}
	};

	// Get user by uid
	let getById = async (req,res) => {
		let user = await Admin.auth().getUser(req.params.id)
		.then(function(userRecord) {
		    // See the tables below for the contents of userRecord
			console.log(userRecord);
		    return userRecord.toJSON();
		})
		.catch(function(error) {
			console.log(error);
			return false;
		});

		if (user) {
			res.status(200);
			res.send(user);
		} else {
			res.status(500);
			res.send('Failed');
		}
	};

	// Update user properties
	let patch = async (req,res) => {
		let uid = req.params.id;

		let params = {};

		for (let p in req.body) {
			params[p] = req.body[p];
		}

		let user = await Admin.auth().updateUser(uid, params)
		.then(function(userRecord){
			return userRecord.toJSON();
		})
		.catch(function(error){
			console.log(error);
			return false;
		});

		if (user) {
			res.status(200);
			res.send(user);
		} else {
			res.status(500);
			res.send('Failed');
		}
	};

	// Get user by email
	let getByEmail = async (req,res) => {
		let email = req.body.email;

		let user = await Admin.auth().getUserByEmail(email)
			.then(function(userRecord){
				return userRecord.toJSON();
			})
			.catch(function(error){
				res.status(500);
				console.log(error);
			});

		if (user) {
			res.status(200);
			console.log(user);
			res.send(user);
		}
	};

	// Delete user
	var del = function (req,res) {
		var uid = req.params.id;

		Admin.auth().deleteUser(uid)
			.then(function(){
				res.status(200);
				res.send('User '+uid+' deleted');
				console.log('User deleted');
			})
			.catch(function(error){
				console.log('Error deleting user: ',error);
				res.status(500);
				res.send('Internal server error');
			})
	}

	// Return the module
	return {
		add: add,
		getById: getById,
		getByEmail: getByEmail,
		patch: patch,
		del:del
	}
}

// Export the module
module.exports = userController;
