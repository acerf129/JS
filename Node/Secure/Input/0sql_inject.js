//module between client side and server side
const express = require("express");
const Student = require("../models/student");
const router = express.Router()
//Postgre
var pg = require("pg");
const client = new pg.Client({
    user: "docker",
    database: "postgres",
    password: "docker",
    port: 5432,
  });
client.connect()
router.post("/update/:id", (req, res) => {
    client.query(
      "UPDATE students SET first_name= '" +req.body.first_name +"', last_name='" +req.body.last_name +"', id='" +req.body.id +"' WHERE id='" +req.params.id +"';",
      (err, result) => {
        console.log("Updated");
        if (err) {
          console.log(err);
        }}
    );
  });
//to
router.post("/update/:id", (req, res) => {
    client.query(
      "UPDATE students SET first_name= $1::text , last_name=$2::text, id=$3::int WHERE id=$4::int",
      [req.body.first_name, req.body.last_name, req.body.id, req.params.id],
      (err, result) => {
        console.log("Updated");
        if (err) {
          console.log(err);
        }
      }
    );
  });

//MYSQL
  var mysql=require('mysql');
  var connection = mysql.createConnection({
    host:'localhost',
    user:'me',
    password:'secret',
    database:'my_db'
  });
  connection.connect();
  
  connection.query(
    "UPDATE users SET firstname = ? WHERE id = ?",
    //first_name=//connection.escape(req.body.firstname);
    [req.body.first_name,1001],
    (err,result)=>{
        console.log("UPDATE");
        if (err){
            console.log(err);
        }
    }
  )