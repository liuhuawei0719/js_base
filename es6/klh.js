function add(a,b){
  return a+b;
}

// function curry(fn){
//   var firstArgs = Array.prototype.slice.call(arguments,1)
//   console.log('firstArgs',firstArgs)
//   return function(){
//     var nextArgs = [...arguments]
//     console.log('nextArgs',nextArgs)
//     var allArgs = firstArgs.concat(nextArgs)
//     return fn.apply(this,allArgs);
//   }
// }

function addUp(){
  var args=[...arguments];
	var _adder= function(){
    var _args=Array.prototype.slice.call(arguments)
    if(_args.length == 0){
      return args.reduce((a,b)=>{
        return a+b;
      },0)
    }else{
      [].push.call(args,..._args)
      return _adder
    }
   
  }
	_adder.toString=function(){
    return _adder
	}
  return _adder
}
//console.log(addUp(1,2,3))



var addexe = function(){
  var args = Array.prototype.slice.call(arguments);
  var curry1 = function(){
    var _args = Array.prototype.slice.call(arguments);
    if(_args.length == 0){
      return args.reduce((prevs,current)=>{
        return prevs+=current
      },0)
    }else{
      args.push(..._args)
      return curry1
    }
  }
  return curry1
}
var a = addexe(1)(2)(3)
console.log(a())


