 var userController = function(Admin){
	// Add user to firebase
	var add = function(req,res){
		var email = req.body.email;
		var password = req.body.password;
		Admin.auth().createUser({
			email: email,
			password: password
		})
		.then(function(userRecord){
			res.setHeader('Content-Type','application/json');
			var user = userRecord.toJSON();
			res.status(201);
			res.send(user);
			console.log('-------');
			console.log('User created: ');
			console.log('uid: '+userRecord.uid);
			console.log('email: '+userRecord.email);
			console.log('emailVerified: '+userRecord.emailVerified);
			console.log('disabled: '+userRecord.disabled);
		})
		.catch(function(error){
			res.status(200);
			res.send('Error:'+error);
			console.log(error);
		});
	}

	// Get user by uid
	var getById = function(req,res){
		Admin.auth().getUser(req.params.id)
		.then(function(userRecord) {
		    // See the tables below for the contents of userRecord
		    res.status(200);
		    var user = userRecord.toJSON();
		    res.send(user);
		    console.log(userRecord);
		})
		.catch(function(error) {
		    res.status(500);
			res.send('Failed:'+error);
		});
	}

	// Update user properties
	var patch = function(req,res) {
		var uid = req.params.id;

		params = {};

		for (var p in req.body) {
			params[p] = req.body[p];
		}

		Admin.auth().updateUser(uid, params)
		.then(function(userRecord){
			res.status(200);
			var user = userRecord.toJSON();
			res.send(user);
			console.log('-------');
			console.log('User Updated: ');
			console.log('uid: '+userRecord.uid);
			console.log('email: '+userRecord.email);
			console.log('emailVerified: '+userRecord.emailVerified);
			console.log('disabled: '+userRecord.disabled);
		})
		.catch(function(error){
			res.status(500);
			res.send('Failed: '+error);
			console.log(error.message);
		})
	}

	// Get user by email
	var getByEmail = function(req,res) {
		var email = req.body.email;

		Admin.auth().getUserByEmail(email)
			.then(function(userRecord){
				res.status(200);
				user = userRecord.toJSON();
				console.log(userRecord);
				res.send(user);
			})
			.catch(function(error){
				res.status(500);
				console.log(error);
			})
	}

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
