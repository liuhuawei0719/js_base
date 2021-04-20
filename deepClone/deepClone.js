

// function deepClone(obj = {}){
//   if(typeof obj !='object' || obj ===null){
//     return obj
//   }
//   let result;
//   if(obj instanceof Array) {
//     result =[];
//   }else {
//     result= Object.create({});
//   }
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//       result[key] = deepClone(obj[key])
//     }
//   }
//   return result;
// }


const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
      city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}


function deepClone(obj){
  if(typeof obj !== 'object' || obj == null ){
    return obj
  }
  let result;
  if(obj instanceof Array){
    result = []
  }else{
    result = Object.create({})
  }

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
// const obj2 = deepClone(obj1)
// console.log(obj2 === obj1)
// obj2.arr[0]='1'
// obj2.age=30
// console.log(obj1)
// console.log(obj2)

class A{
  constructor(age,name){
    this.age = age;
    this.name = name;
  }
  sayName(){
    console.log(this.name,...arguments)
  }
}
const a = new A(11,'bnekkla')
const b = new A(22,'xdd')
const d = new A(33,'3dff')
Function.prototype.myBind2 = function(){
  if(typeof this !== 'function'){
    throw new TypeError('error')
  }
  const args =[...arguments]
  const obj = args.shift()
  let fn = this
  return function Fn(){
    var inner = args.concat([...arguments])
    return fn.apply(obj,inner)
  }
}
// const c = a.sayName.myBind2(b,'hello')
// const e = c(d,'world')


function curryAdd(){
  let args = [...arguments];
  function _curry(){
    let inner = [...arguments];
    if(inner.length <=0){
      const sum = args.reduce((pre,item)=>{
        return pre+item
      },0)
      return sum
    }else{
      args = args.concat(inner)
      return _curry
    }
  }
  return _curry
}
console.log(curryAdd(1)(3)(4)())





