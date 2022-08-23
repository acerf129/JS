const EventEmitter = require('events'); 

const myEmitter = new EventEmitter();
const myEmitter2=new EventEmitter();
someFunction = function (){
  console.log('Something has happened!');
}
myEmitter.on('Some event1', someFunction);
//myEmitter.once('Some event1,someFunction);
myEmitter.emit('Some event1');

const handleErrors=function(errorcode){
    console.error("Error There",errorcode);
  }
myEmitter2.on('error',handleErrors);
myEmitter2.emit('error',10);

const order=function (food){
    console.log(`Order placed for ${food}.\n`);
}
const doorbell=function (){
    console.log(`RING RING!.\n`);
}
const payment=function (food){
    console.log(`Enjoy your ${food}.\n`);
}
//------//
myEmitter.on('order',order);
myEmitter.on('doorbell',doorbell);
myEmitter.on('payment',payment);

myEmitter.emit('order','pizza');
myEmitter.emit('doorbell');
myEmitter.emit('payment','pizza');
// placeOrder = function (food) {
//   myEmitter.emit("order", food);
//   myEmitter.emit("doorbell");
//   myEmitter.emit("payment", food);
// };

// Write your code below
 