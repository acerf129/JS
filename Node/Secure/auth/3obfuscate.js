var express=require('express');
var app=express();
var Hashids=require('hashids');
var hashids=new Hashids('App-wide salt');
app.all(
    '/blog/:blogId/edit',
    isAuthenticated,
    isEditor,
    function(req, res) { 
        //id = 4321234
        var post = db.post().where({
          'id': req.params.blogId
        }).row();
  })
app.all(
    '/blog/:blogHash/edit',
    isAuthenticated,
    isEditor,
    function(req,res){
        //id =4321231
        //var id =req.params.blogId;
        var hash=hashids.encode(req.params.blogId);
        var id =hashids.decode(req.params.blogHash);
        var post= db.post().where({
            'id':id
        }).row();
    }
);