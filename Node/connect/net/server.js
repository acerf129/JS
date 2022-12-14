var net =require('net');
const readline=require('readline');

var server=net.createServer();
const port=3500;

var rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:""
});

server.on("connection",function(socket){
    console.log("Client connected from ",socket.remoteAddress,socket.remotePort);
    socket.write("Hello from the server");
    
    socket.on("data",function(data){
        console.log("Msg from client:",data.toString());
    });
    rl.prompt();
    rl.on("line",function(data){
        socket.write(data);
        rl.prompt();
    });
    socket.on('close',function(err){
        if (err){
            console.log("Client disconnected due to error",err);
            return 
        }
        console.log("Client disconnected");
    });
});
server.on("listening",function(){
    console.log("Server is listening from port:",port);
});
server.listen(port);
