function circular(origin){
  let wm = new WeakMap();
  let rs = false;
  function dp(obj){
    let keys = Object.keys(obj)
    if(!wm.has(obj)) {
      wm.set(obj, obj)
    }
    for(let i=0; i<keys.length;i++){
      let key = keys[i]
      if(typeof obj[key] === 'object'){
        if(wm.has(obj[key])){
          rs= true
          obj[key]={}
        }else{
          wm.set(obj[key],obj[key])
        }
        dp(obj[key])
      }
    }
  }
  dp(origin);
  return rs
}

// const a={}
// const b={}
// const c={}
// const d={}
// a.b = b;
// b.c=c;
// c.d = d
// d.a = a
//a.b = c;
// JSON.stringify(a)
// console.log(circular(a))
// console.log(a)

function curry(){
  let args = [...arguments];
  let result =  args.reduce((sum,cur)=>{
    return sum += cur
  },0);
  //console.log('outer',result)
  function _curry(){
    let arg = Array.prototype.slice.call(arguments) 
    result +=  arg.reduce((sum,cur)=>{
      return sum += cur
    },0)
    if(arg.length<=0){
      return result
    }else{
      return _curry
    }

   
  }
  return _curry;
}

// curry(1)(2)()
// console.log('return',curry(1)(2)(3)());

function _Const(data, value){
  global.data = value;
  Object.defineProperty(global,data,{
    enumerable: false,
    configurable: false,
    get: function(){
      return value
    },
    set: function(data){
      if(data!==value){
        throw new TypeError('type error')
      }else{
        return value
      }
    }
  })
}
// _Const('a',{name: 'bella'})

// console.log(a)
// a.name = 'tom'


function _const(key, value) {
  const desc = {
      value,
      writable: false
  };
  Object.defineProperty(global, key, desc);
}

_const('obj', {
  a: 1
});
obj.b = 2; 
obj = {} 

console.log(obj)