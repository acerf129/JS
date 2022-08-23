const fs=require('fs');
let content="This is what will be written to the file";

fs.stat('text.txt', (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
  
    fs.open('text.txt', "r", (err, fd) => {
      var buffer = Buffer.alloc(stats.size);
      // res, buffer offset length position     //bytesread
        fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
            var data = buffer.toString("utf8", 0, buffer.length);           
            console.log(data);           
            fs.close(fd, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    });
  });

fs.writeFile('text.txt',content,(err)=>{
    if (err){
        console.log(err);
        return 
    }
    console.log("File Written");
})
fs.readFile('text.txt','utf-8',(err,data)=>{
if (err){
    console.log(err);
    return 
}
//console.log(data);
});


console.log("Hello")