var express=require('express');
var app=express();
var access=require('./access');
//allow all user to get
app.get('/blog',access.isAuthenticated,function(req,res){});

//must be an editor to post //add
app.post('/blog',access.isAuthenticated,access.sEditor,function(req,res){});

//must be an editor to put //update
app.put('/blog',access.isAuthenticated,access.isEditor,function(req,res){})

//must be admin to delete
app.delete('/blog',access.isAuthenticated,access.isAdmin,function(req,res){})

//Not to do
if (valid === true && dataSaved === true) {
    res.redirect('/blog/1/edit');
}
//Do 
//Call a method without redirect
if (valid === true && dataSaved === true) {
    app.edit(1);
}
//define middleware function
function veryAdditionalData(req,res,next){
    if (valid==true && dataSaved==true){
        return next();
    }
    res.redirect('/blog/'+req.params.blogId);
}
app.all(
    '/blog/:blog:Id/edit',
    isAuthenticated,
    isAdmin,
    isEditor,
    veryAdditionalData,
    function(req,res){

    }
);