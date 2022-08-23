//on server
/dev/random
/dev/urandom
//in node
var bcript= require('bcrypt');
var crypto= require('crypto');
crypto.randomBytes();
bcrypt.genSalt();
BCrypt,
SHA-256
SHA-512
//Bcript

var saltRounds=10;

var password ="Educ@tive123";
var password2="PASTE HASH HERE"
var valid =False;
//generate salt and hash password
bcript.genSalt(saltRounds,function(err,salt){
    console.log("salt:",salt);
    //$2b$10$cIv/XjbQt4UfuYY8cdGS5
    bcript.hash(
        password,
        salt,
        function(err,passwordHash){
            console.log("Hashpassword",passwordHash);
            //$2b$10$cIv/XjbQt4UfuYY8cdGS5.zovC1S8MI1S.Wj0DIyMsGzARcPFg5Ai
        });
});
//same as above
bcript.hash(
    password,
    saltRounds,
    function(err,passwordHash){
        console.log(passwordHash);
        //$2b$10$wn.KXCADgqqPpNEu9RGzrecVUR3zroMGHKn.uU7.ZoP85MUJpebBW
    }
)
//same as above Using Promise
bcript.hash(password,saltRounds).then(function(err,passwordHash){
    console.log(passwordHash);
});
bcript.compare(
    password,
    password2,
    function(err,res){
        console.log(res);
        if (res)valid=true;
    }
)