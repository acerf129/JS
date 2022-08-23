console.log('This is a first message');

process.on('beforeExit',(code)=>{
    console.log('Process before Exit event with code',code);
});
process.on('exit',(code)=>{
    console.log('Process exit event with code',code);
});
console.log('This is the second message');

setTimeout(()=>{
    console.log("This is a timeout");
},500);
process.argv.forEach((val,index)=>{
    console.log(`${index}: ${val}`);
});//0:node from 1:file from 2:param after node process.js
//process.stdin
//process.stdout
//process.stderr
//process.cwd() current working dir
//process.chdir change cur dir of the process
//process.exit([code=0])exit the process
