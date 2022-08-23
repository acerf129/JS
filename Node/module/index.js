//function (exports,require,moudule,__filename,__dirname){}
const square= require('./square.js');
const shape= require('./shape.js');
console.log("Area of the square is ",square.area(10));
console.log("Perimter of the square is ",square.perimeter(10));

const myShape =new shape("Hexagon",6);
myShape.info();