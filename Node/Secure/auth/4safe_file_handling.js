var express=require('express');
var app=express();
//check accountant auth
function isAccountant(req,res,next){
    if (typeof(req.user)!=='undefined'&&req.user.groups.indexOf('accountant')!==-1){
        return next();
    }
    res.redirect('/');
}
//open file check
app.get(
    '/accounting/statement/:year/:month',
    isAuthenticated,
    isAccountant,
    function(req,res){
        var options={
            root:__dirname+'../uploads/acct/stmnts',
            dotfiles:'deny',
            headers:{
                'Content-type':'application/pdf',
                'Expires':'0',
                'Cache-control':'must-revalidate',
                'Pragma':'public'
            }
        };
        var filename=parseInt(req.params.year)+parseInt(req.params.month)+'.pdf';
        res.sendFile(filename,options,function(err){
            if (err)res.status(err.status).end();
        }).end();
    }
);