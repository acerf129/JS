var md5 = require('md5');
var bcrypt = require('bcrypt');

//start with a default state of failure
//always assume failure first
var valid = false;

var saltRounds = 10;

//the plaintext password submitted via a form
var password = req.body.password;

//grab the password hash from our imaginary db
var passwordHash = db.user.passwordHash;

//when you create this column you'll default
//it to the algo you used previously
var passwordAlgo = db.user.passwordAlgo;


if (passwordAlgo === 'bcrypt') {

	//they have previously logged in and
	//upgraded their hash so they're good
	//proceed with verifying login as usual
	bcrypt.compare(
		password,
		passwordHash,
		function(err, res){

				if (res === true) {
					valid = true;
				}


				if (valid === true) {
					//valid auth stuff
				}

	});

}
else {

	//this is modified from our old hash check
	//your legacy code will definitely differ
	var oldHash = md5(req.body.password);

	if (oldHash === passwordHash) {

		//generate the new hash with the
		//plaintext password they just gave us
		bcrypt.hash(
			password,
			saltRounds,
			function(err, passwordHash){

				valid = true;

				var passwordAlgo = 'bcrypt';

				//save the new passwordHash and
				//passwordAlgo to the database

		});
	}
}