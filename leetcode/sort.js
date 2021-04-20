
// function quickSort(){
//   let arr = [1,3,54,6,5];
//   let len = arr.length
//   function _quick(arr,l,r) {
//     let temp = arr[l];
//     arr[l] = arr[Number((l+r)/2)];
//     arr[Number((l+r)/2)] = temp;
    
//     let i=l,j=r;
//     while(i!=j){
//       while(arr[j]>=temp&&j>i){
//         j--;
//       }
//       while(arr[i]<=temp&&i<j){
//         i++;
//       }
//       if(j>i){
//         let swap = arr[i];
//         arr[i] = arr[j];
//         arr[j] = swap;
//       }
//     }
//     arr[l] = arr[i];
//     arr[i] = temp;
//     _quick(arr,l,i-1) 
//     _quick(arr,i+1,r) 
//   }
//   _quick(arr,0,len-1)
//   console.log(arr)
//   return arr
// }

var quickSort = function(arr){
  if(arr.length<=1){
    return arr
  }
  let left=[],right=[];
  let pointIndex = Math.floor(arr.length/2);
  let pointer = arr.splice(pointIndex,1)[0];
  
  for(let i=0;i<arr.length;i++){
    if(arr[i]>pointer){
      right.push(arr[i]);
    }else{
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(pointer,quickSort(right))
}

console.log(quickSort([1,2,65,3,2]))



var addNum = function(){
  let args = Array.prototype.slice.call(arguments);
  function curry(){
    let _args = Array.prototype.slice.call(arguments);
    if(_args.length===0){
      return args.reduce((prev,current)=>{
        return prev+=current;
      },0)
    }else{
      args.push(..._args)
      return curry
    }
  }

  return curry
}
//console.log(addNum(1)(2)(3)())

var flat = function(arr){
  function _flat(_arr){
    return _arr.reduce((prev,current)=>{
      return prev.concat(Array.isArray(current)?_flat(current):[current])
    },[])
  }
  return _flat(arr)
}
//console.log(flat([1,2,[2,3]]))


var name ="11" ,age=13;
var obj = {
  name:"22",
  objAge:this.age,
  myFun: function(){
    console.log('name=',this.name,'age',this.age)
  },
  myFun1: function(){
    console.log('name=',this.name,'age',this.age)
  },
}