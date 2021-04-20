
const user = { name: 'bruce'}

const userProxy = new Proxy(user,{
    get: (obj,prop) =>{
        if(prop === 'avatar'){
            if(!obj.avatar){
                return 'hello proxy'
            }
            
        }
    }

})
// console.log(userProxy.avatar)

var LRUCache = function(capacity){
    this.capacity = capacity;
    // this.cache = [];
    this.cache = new Map();
}

LRUCache.prototype.get = function(key){
    if(this.cache.has(key)){
        let temp = this.cache.key;
        this.cache.delete(key)
        this.cache.set(key,temp);
        return temp;
    }
    return -1;
}
LRUCache.prototype.put = function(key,value){
    if(this.cache.has(key)){
        this.cache.delete(key)
    }else if(this.cache.size >= this.capacity){
        this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key,value)
}
LRUCache.prototype.get1 = function(key){
    let index = this.cache.findIndex((item)=>{
        item.key === key;
    })
    if(index === -1){
        return -1;
    }

    let value = this.cache[index].value;
    this.cache.splice(index,1);
    this.cache.unshift({
        key,
        value
    })
    return value
}

LRUCache.prototype.put1 = function(key,value){
    let index = this.cache.findIndex((item)=>{
        item.key === key;
    })
    if(index > -1){
        this.cache.splice(index,1);
    }else if(this.cache.length >= this.capacity){
        this.cache.pop();
    }
    this.cache.unshift({ key,value })
}

const map = new Map();
map.set("11","232")
map.set("22","232")
map.set("33","232")
// console.log(map.keys().next())


function testAsy(x){
    console.log("111")
    new Promise(resolve=>{
        resolve(x);
        console.log("1122221")
        setTimeout(() => {
            console.log("setTimeout")
          }, 3000)
         }
        ).then(()=>{
            console.log("@323")
        })
    
    new Promise(resolve=>{
        resolve(x);
        
        }).then(()=>{
            console.log("@3233333")
        })
  
 }

    
function* fn(){
    yield new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("A")
            resolve("resolve1")
        },500)
    });
    yield new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("B")
            resolve("resolve2")
        },500)
    });
    yield new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("C")
            resolve("resolve3")
        },500)
    })
}

function co(fn){
    let f = fn();
    next();
    function next(data){
        let result = f.next();
        if(!result.done){
            result.value.then((info)=>{
                console.log(info,data);
                next(info)
            })
        }
    }
}
co(fn)

let a = co(fn)

console.log(a)

