const express=require('express');
const app=express();
// dafult by false
app.post('/signup',function(){
    var message='Invalid From Data';
    if (form.validate('signup')===true){
        var message ='Form Valid';
    }
});