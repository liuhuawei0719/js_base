let arr = [1,2,[3,4,[5,6]],7,[8,9]];

let flat = function(arr){
  let arrstr = arr.toString()
  let flatArr = arrstr.split(',').map(item => {
    return Number(item)
  })
  console.log( flatArr)
}

//flat(arr);

function reduceFlat(arr){
  return arr.reduce(
    (prev,current) => {
      return prev.concat(Array.isArray(current) ? reduceFlat(current):current)
    },[])
}

console.log(reduceFlat(arr))


function flat(arr){
  return arr.reduce((pre,current)=>{
    return pre.concat(Array.isArray(current)?flat(current): current)
  },[])
}



Array.prototype.myMap= function(fn,obj){
  obj = obj || window;
  const arr=[]
  this.reduce((pre,cur,index,arr)=>{
    arr.push(fn.call(obj,cur,index,arr))
  },null)
  return res
}













