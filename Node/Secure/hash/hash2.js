//Update path 1 
var md5=require('md5');
var bcript =require('bcript')

var saltRounds=10;
var users=db.users;
//start default value
var valid=false;
//update unhash password to bcript hash 
users.foreach(function(user){
    bcript.hash(
        password,
        saltRounds,
        function(err,newHash){
            //sage newHash to db
        }
    );
});
//registration
var intermediatePasswordHash=md5(req.body.password);
bcript.hash(
    intermediatePasswordHash,
    saltRounds,
    function(err,passwordHash){
        //save passwordHash to db;
    }
);
//login check
var password=req.body.password;
var passwordHash=db.users.passwordHash;
var intermediatePasswordHash=md5(password)
bcript.compare(
    intermediatePasswordHash,
    passwordHash,
    function(err,res){
        if (res){
            valid=True;
        }
        if (valid){
            //valid auth
        }
    }
)