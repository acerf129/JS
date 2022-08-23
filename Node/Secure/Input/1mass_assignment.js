//Senerio
<form action="...">
    <input name="first_name" />
    <input name="last_name" />
    <input name="email" />
    <input type="hidden" name="permissions" value="{'admin':'true'}" />
</form>

var User =mongoose.model('User');
var liz=new User(req.body);
liz.save();
//
const express=require('express');
const Student=require('../moldels/student');
const router=express.Router();
var pg = require('pg');
const { default: cli } = require('@angular/cli');
const client = new pg.Client({
    user: "docker",
  database: "postgres",
  password: "docker",
  port: 5432,
});
client.connect();
//1.Turn off all mass assignment
//2.whitelist
//3.blacklist
router.post('/add',(req,res)=>{
    var whitelist=["firstname","lastname","id"];
    var data={};
    for (var property in req.body) {
        if (
          req.body.hasOwnProperty(property) &&
          whitelist.indexOf(property) !== -1
        ) {
          data[property] = req.body[property];
        } else {
          console.log("Extra attributes dropped") // this is just for demo
        }
      }
    const newStudent=Student(data);
    newStudent
    .save()
    .then((student)=>{res.json(student)})
    .catch((err)=>{res.status(500).json(err)});
});

moudule.exports=router;