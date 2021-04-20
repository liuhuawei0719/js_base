Array.prototype._map = function(fn, callbackThis){
  let res = [];
  let cbThis = callbackThis || null;
  this.reduce((before, after, idx, arr)=>{
    res.push(fn.call(cbThis,after,index,arr))
  },null);
  return res;
}



// arr1.map(function(item,idx,arr){
//   item //数组的每一项
//   idx // 当前项的索引
//   arr // 当前遍历的数组
//   this // 函数体内的 this 为 callbackThis参数，
// },callbackThis)
// // 如果不指定或者指定为 null和 undefined，则 this指向全局对象





Array.prototype.selfMap = function(fn,callbackThis){
  let res = [];
  let cbThis = callbackThis || null;
  this.reduce((prev,current,currentIndex,arr)=>{
    res.push(fn.call(cbThis,current,currentIndex,arr));
  },null)

  return res;
}

Array.prototype.selfMap1 = function(fn,callbackThis){
  let arr = this;
  let cbthis = callbackThis;
  let res = [];
  if(arr.length=0){
    return [];
  }else{
    for(let i=0;i<arr.length;i++){
      res.push(fn.call(cbthis,arr[i],i,arr))
    }
  }
  return res;
}

var cb = {msg: 'bb'}

var a = [1,2,3,4].selfMap(function(item,index,arr){
  console.log('this',this)
  //console.log('arr',arr)
  return item+1
},cb)
//console.log(a)

var b = [1,2,3,4].map((item,index,arr)=>{
  //console.log(JSON.stringify(cb))
  return item+1
},cb)
//console.log(b)