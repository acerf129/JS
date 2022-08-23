var express=require('express');
var app=express();
var authenticated=false;
function isAuthenticated(req,res,next){
    if (typeof(req.user)!='undefined'&&
        req.user.authenticated==true
    ){
        return next();
    }
    //if not authenticated return
    res.redirect('/login');
};
function isAdmin(req,res,next){
    if (typeof(req,user)!=="undefined"&&
        req.user.groups.indexOf('admin')!==-1
    ){
        return next();
    }
    res.redirect('/');
};
function isEditor(req,res,next){
    if (typeof(req,user)!=="undefined"&&
        req.user.groups.indexOf('editor')!==-1
    ){
        return next();
    }
    res.redirect('/');
};
app.all(
    '/user/*',
    isAuthenticated,
    isAdmin,
    function(req,res){
        //only get here if user is authenticated
    }
);