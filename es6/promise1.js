/* function myPromise(fn){
  let state='pending',value=null,successCallback=[];
  this.then = function(fnc){
    if(state==='pending'){
      successCallback.push(fnc)
      return this;
    }
    fnc(value);
    return this;
  }
  
  function resolve(data){
    state = 'fulfilled';
    value = data
    setTimeout(()=>{
      successCallback.forEach((cb)=>{
        cb(value)
      })
    },0)
  }

  fn(resolve)
} */

function myPromise(fn){
  var state = 'pending',value=null,callbacks=[];
  this.then = function(onFullfilled){
    return new Promise(function(resolve){
      handle({
        onFullfilled:onFullfilled||null,
        resolve:resolve
      })
    })
  }
  function handle(callback){
    if(state==='pending'){
      callbacks.push(callback);
      return
    }
    if(!callback.onFullfilled){
      callback.resolve(value);
      return
    }
    var ret = callback.onFullfilled(value);
    callback.resolve(ret);
  }

  function resolve(newValue){
    if(newValue && (typeof newValue === 'object' || 
          typeof newValue === 'function')){
      var then = newValue.then;
      if(typeof then === 'function'){
        then.call(newValue,resolve);
        return;
      }
    }
    state = 'fulfilled';
    value = newValue;
    setTimeout(()=>{
      callbacks.forEach((cb)=>{
        handle(callbacks);
      })
    },0)
  }

  fn(resolve)

}