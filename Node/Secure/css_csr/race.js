//Using callback to avoid race condition

function generateCsrf(req, res, next) {

	//safe default!
	req.session.csrfToken = null;

	//generate a new token
	var crypto = require('crypto');
	crypto.randomBytes(48, function(err, buffer) {

		var token = buffer.toString('hex');

		//save the token in the session and proceed
		req.session.csrfToken = token;

		//let's try to print the token for this demo
		console.log(token)

		next();

	});
    // //save the token in the session and proceed
	// req.session.csrfToken = token;

	// //let's try to print the token for this demo
	// console.log(token)

	// next()
}