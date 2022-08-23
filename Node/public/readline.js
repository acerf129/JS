const readline = require('readline');
const rls=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let querys = "What is your name?\n";
rls.question(querys,(ans)=>{
    console.log(`Hello ${ans}!`);
    rls.close;
});