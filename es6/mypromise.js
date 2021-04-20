Promise.myAll = function(promises){
  const values = new Array(promises.length)
  let resolvedCount = 0;
  return new Promise((resolve,reject) => {
    promises.forEach((p, index) => {
      Promise.resolve(p).then(
        value => {
          values[index] = value
          resolvedCount ++;
          if(resolvedCount === promises.length){
            resolve(values)
          }
        },
        reason => {
          reject(reason)
        }
      )
    });
  })
}

Promise.myRace = function(promises){
  return new Promise((resolve,reject) => {
    promises.forEach((p,index) => {
      Promise.resolve(p).then(
        value => {
            // 只要有一个成功，返回的promise的状态就为resolved
          resolve(value)
        },
        reason =>{
           //只要有一个失败，return的promise状态就为reject
          reject(reason)
        }
      )
    })
  })
}


//手写promise
class myPromise{
  constructor(fn){
    this.successList = [];
    this.failList = [];
    this.state = "pending";
    fn(this.resolveFn.bind(this),this.rejectFn.bind(this))
  }
  resolveFn(res) {
    this.state = 'resolved';
    this.successList.push()
  }
  rejectFn(res){
    this.state = 'reject'
  } 
  then(successFn,failFn){
    if(typeof successFn == "function"){
        this.successList.push(successFn);
    }

    if(typeof failFn == "function"){
        this.failList.push(failFn)
    }
  }
  //catch方法
  catch(failFn){
      if(typeof failFn == "function"){
          this.failList.push(failFn)
      }
  }
}

