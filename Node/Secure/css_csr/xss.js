const express=require('express');
const app=express();
//CSS XSS take advantage of the user by means of a trusted website
//Displayed data need to be protected
//never get data from url (and other sources) and echo back to browser
var escape=require('html-escape');
var name="jen";
<h1>Title</h1>
'Hello ' + escape(name);
//CSRF take advantage of the website by means of a trusted user
//ensure get do not alter data else confirm action
//Our CSRF tokens are a standard Nonce store it in the user’s session
var crypto=require('crypto');
const { appendFile } = require('fs');

function generateCsrf(req,res,next){
    //safe default!
    req.session.csrfToken=null;
    //generate token
    crypto.randomBytes(48,function(err,buffer){
        var token=buffer.toString('hex');
        req.session.csrfToken=token;
        next();
    });
}
generateCsrf();

app.get(
    '/signup',
    generateCsrf,
    function(req,res){
        res.render('signup/form',{
            csrfToken:req.session.csrfToken
        });
    }
);
function validCsrd(req,res,next){
    if (req.body.csrfToken===req.session.csrfToken){
        //clear since consumed
        req.session.csrfToken=null;
        next();
    }
}
app.post('/signup',validCsrd,function(req,res){
    //process data
});
//Attacker tricks with fake form won't have a csrf token
var csurf=require('csurf');
//check this part
var csrfProtection=crypto({cookie:true});

app.get('/form',csrfProtection,function(req,res){
    res.render('sender',{csrfToken:req.csrfToken()})
});
app.form('/process',parseForm,csrfProtection,function(){
    res.send('data is being processed');
});
/* <form action="/process" method="POST">
  <input type="hidden" name="_csrf" value="{{csrfToken}}"> // name="_csrf" 與 {{csrfToken}} 是重點
  
  Favorite color: <input type="text" name="favoriteColor">
  <button type="submit">Submit</button>
</form> */


