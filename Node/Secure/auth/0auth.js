var brcipt=require('bcript');

//seperate this moudule
var auth={
    user:{authenticated:false},
    message:'',
    login:function(password,callback,errccallback){
        var _this=this;
        var passwordHash=db.user.passwordHash;
        brcipt.compare(
            password,
            passwordHash,
            function(err,res){
                if (res){
                    _this.user=db.user;
                    _this.user.authenticated=true;
                    _this.message="log in";
                    callback(_this);
                }
                _this.message="Incorrect ID or Password";
                errccallback(_this);
            }
        );
    }
};
//login the user
auth.login(req.body.password,function(res){
    req.user=res.user;
},function(res){
    var errMsg=res.message;
})