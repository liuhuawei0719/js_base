/* var b = 10;
(function b(){
  b=20;
  console.log(window.b);
})(); */


/* var b = 10;
(function b(){
  'use strict'
  b=20;
  console.log(b);
})();
 */

/* 
(function A(){
  console.log(A)
  A=1;
  console.log(global.A);
  console.log(A)
}()) */


/* (function A() {
  console.log(A); // undefined
  var A = 1;
  console.log(global.A); // undefined
  console.log(A); // 1
}()) */


/* var num = 10
var obj = {num: 20}
obj.fn = (function (num) {
  this.num = num * 3
  num++
  return function (n) {
    this.num += n
    num++
    console.log(num)
  }
})(obj.num)
var fn = obj.fn
fn(5)
obj.fn(10)
console.log(num, obj.num) */



/* var point = { 
  x : 0, 
  y : 0, 
  moveTo : { 
      // 内部函数
      moveX: function(x) {
         console.log(this) // {moveX: ƒ, moveY: ƒ}
         this.x = x;
      },
      // 内部函数
      moveY: function(y) { 
         this.y = y;
      }
  } 
}; 
point.moveTo.moveX(1); 
point.moveTo.moveY(1);
console.log(point.moveTo);  // {moveX: ƒ, moveY: ƒ, x: 1, y: 1}
console.log(point.x); // 0
console.log(point.y); // 0
console.log(x) // x is not defined
console.log(y) // */

function Foo(){}
let f1= new Foo();
f1.prototype;






