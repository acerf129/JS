const dgram=require('dgram');
const readline = require("readline");
const server= dgram.createSocket("udp4");
const port=3600;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });
let clientSocket=0
server.on("message",(data,rinfo)=>{
    console.log(`Msg from client at port: ${rinfo.port}: ${data}`);
    clientSocket=rinfo.port;
});

server.on("listening",function(){
    console.log("Server is listening on port",port);
});
server.on("close",function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Client disconnected");
    }
    server.close();
});
server.bind(port);
rl.prompt();
rl.on("line", function (line) {
  server.send(line, clientSocket, "localhost");
  rl.prompt();
});
