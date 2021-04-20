function Father(name){
  this.name = name;
  this.say = function(){
    console.log("father:"+name)
  }
}

function Son(){
  this.age=12;
  this.sayAge = function(){
    console.log("Son:"+age)
  }
}
// Son.prototype = new Father('baba')
// Son.prototype.constructor = Son
// var child = new Son()
// console.log(child.name);

function Son1(name,age){
  Father.call(this,name);
  this.age=age;
  this.sayAge = function(){
    console.log("Son1:"+age)
  }
}
// var child = new Son1("Son1 father",12)
// child.say();
// console.log()


function Son2(name,age){
  Father.call(this,name);
  this.age=age;
  this.sayAge = function(){
    console.log("Son2:"+age)
  }
}
Son2.prototype = new Father();
Son2.prototype.constructor =Son2 
// var child2 = new Son2("Son2 father",12)
// child2.say();
// child2.sayAge();

function mynew(obj,rest){
  //var newobj = Object.create(obj.prototype);
  var newobj = {};
  newobj.__proto__ = obj.prototype
  let result = obj.call(newobj,...rest)
  return typeof result === 'object' ? result:newobj
}

var fater = mynew(Father,'new fater')
fater.say()


Function.prototype.myCall = function(obj,...rest){
  this||window
  obj.fn = this;
  var result = obj.fn(...rest);
  delete obj['fn'] ;
  return result
}

Function.prototype.myApply = function(obj,rest){
  this||window
  obj.fn = this;
  var result = obj.fn(...rest);
  delete obj['fn'] ;
  return result
}


Function.prototype.myBind = function(){
  const self = this || window;
  const args = Array.prototype.slice.call(arguments);
  var obj = args.shift()
  return function(){
    return self.apply(obj,args)
  }
}

function myNew(obj,...rest){
  const newObj = Object.create(obj)
  let result = obj.call(newObj,...rest)
  return typeof result === 'object' ? result : newObj 
}


const  curry = function(fn){
  return function curriedFn(...args){
    
  }
}