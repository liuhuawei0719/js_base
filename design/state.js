
class Promise{
  constructor(fn){
    this.value = null
    this.reason = null
    this.state="pending"
    this.callback=[]
    function resolve(value){
      if(this.state === 'pending'){
        this.state="fulfilled"
        this.value = value
        this.callback.forEach((item)=>{
          item.onSucced();
        })
      }
    }
    function reject(reason){
      if(this.state === 'pending'){
        this.state="rejected",
        this.reason = reason,
        this.callback.forEach((item)=>{
          item.onReject( this.reason );
        })
      }
    }
    try{
      fn(resolve,reject)
    }catch(e){
      reject(e)
    }
  }
  then(onResolve,onReject){
    if(this.state === 'fulfilled'){
      onResolve(this.value)
    }
    if(this.state === 'rejected'){
      onReject(this.reason)
    }
    if(this.state === 'pending')
    this.callback.push({
      onSucced: onResolve,
      onReject:onReject
    })
  }
}


class myPromise{
  constructor(fn){
    this.state="pending"
    this.value= value
    this.reason = reason
    this.onFulfilledCallback = []
    this.onRejectedCallback = []
    function resolve(value){
      if(this.state === 'pending'){
        this.state="fulfilled"
        this.value = value
        this.callback.forEach((item)=>{
          item.onSucced();
        })
      }
    }
    function reject(reason){
      if(this.state === 'pending'){
        this.state="rejected",
        this.reason = reason,
        this.callback.forEach((item)=>{
          item.onReject( this.reason );
        })
      }
    }
    try{
      fn(resolve,reject)
    }catch(e){
      reject(e)
    }
  }
  then(onResolve,onReject){
    if(this.state === 'fulfilled'){
      return myPromise((resolve,reject)=>{
        try{
          let f = onResolve(this.value)
          if(f instanceof myPromise){
            f.then(resolve,reject)
          }else{
            resolve(f)
          }
        }catch(e){
          reject(e)
        }
      })
    }
    if(this.state === 'rejected'){
      onReject(this.reason)
    }
    if(this.state === 'pending'){
      this.callback.push({
        onSucced: onResolve,
        onReject:onReject
      })
    }
  }
}





