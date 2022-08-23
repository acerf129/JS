const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const readline = require("readline")
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });
message=Buffer.from("Hello from client");
client.send(message, 3600, "localhost", (err) => {
  console.log("Message sent to server");
});

client.on("message", (data) => {
  console.log("Msg from server:", data.toString());
});

client.on("end", () => {
  console.log("disconnected from server");
})
rl.prompt();
rl.on("line",(line)=>{
    client.send(line,3600,"localhost");
    rl.prompt();
});