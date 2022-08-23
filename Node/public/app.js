const exp = require('constants')
const express=require('express')
const app=express()
const path =require('path')

//app.use(express.static('public'))
app.use(express.static('./public'));

app.get('/',(req,res)=>{
    console.log("user hit the resourse");
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
})
app.get('/about',(req,res)=>{
    res.status(200).send("About page");
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resourse not found</h1>');
})
app.listen(3500,()=>{
    console.log('server is listening on port 3500..');
})

//localhost:3000/
//public/image
//public/css
//public/js
//app.use(express.static('files'))
//app.use('/static',express.static('public'))
// /static/public