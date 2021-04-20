//深克隆
function deepClone(obj){
  if(typeof obj !== 'object')
    return obj;
  let result = {};
  if(Array.isArray(obj)){
     result = []
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result;
}
const a = {
  name:'bella',
  age: 23,
  skill: ['java','js']
}
/* const b = deepClone(a);
console.log(a,b)
b.name="Tom"
b.skill[1]='pathon'
console.log(a,b) */

//快速排序法
var quickSort = function(arr){
  if(arr.length<=1){
    return arr
  }
  let left=[],right=[],mid=Math.floor(arr.lenght/2);
  let pointer = arr.splice(mid,1)[0];
  for(let i=0;i<arr.length;i++){
    pointer>arr[i] ? left.push(arr[i]):right.push(arr[i]);
  }
  return quickSort(left).concat(pointer,quickSort(right));
}
/* const quickSortArr = [34,23,43,56,44,5,2,2,7,66]
console.log(quickSort(quickSortArr)) */

//冒泡排序法
function bubleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}
/* const bubleSortArr = [34,3,4,56,44,5,2,2,7,66]
console.log(bubleSort(bubleSortArr))
 */

//全排列
function perm(arr){
  let result=[],used={};
  function dfs(path){
    if(arr.length == path.length){
      result.push(path.slice())
      return 
    }
    for(let key of arr){
      if(used[key]){
        continue;
      }
      used[key] = true;
      path.push(key);
      dfs(path);
      used[key] = false;
      path.pop();
    }
  }
  dfs([])
  return result;
}
/* const nums=[1,2];
console.log(perm(nums)) */




//非递归二叉树后续排列
function postBinaryTree(tree){
  if(!tree){
    return []
  }
  let stack=[tree],result=[];
  while(stack.length!==0){
    let top = stack.pop();
    result.unshift(top.val)
    if(top.left){
      stack.push(top.left)
    }
    if(top.right){
      stack.push(top.right)
    }
  }
  return result;
}


//非递归二叉树前续排列
function preBinaryTree(tree){
  if(!tree){
    return []
  }
  let stack=[tree],result=[];
  while(stack.length!==0){
    let top = stack.pop();
    result.push(top.val)
    if(top.right){
      stack.push(top.right)
    }
    if(top.left){
      stack.push(top.left)
    }
  }
  return result;
}

//非递归二叉树中续排列
function inBinaryTree(root){
  let result = [];
  let stack = [];
  let node = root;
  while (node !== null || stack.length !== 0) {
    if (node != null &&  node.left !== 'undefined') {
      node = node.left;
      stack.push(node);
    } else {
      node = stack.pop();
      node && result.push(node.val);
      if(node && node.right)
        node = node.right; //看右边有没有
    }
  }
  return result;
}
let tree = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
}
// console.log(inBinaryTree(tree))

function subArr(arr,brr){
  let lenA = arr.length;
  let lenB = brr.length;
  let pointer = 0;
  if(lenA <lenB){
    return false;
  }
  if(lenA==0 && lenB==0){
    return true;
  }
  for(let i=0; i<lenA && lenA-pointer>=lenB; i++){
    if(arr[i] !== brr[0]){
      pointer++;
    }else if(arr[i] === brr[0]){
      let j = 0;
      while(j<lenB && i<lenA  && arr[i] === brr[j]){
        i++;
        j++
      }
      if(j==lenB){
        return true;
      }else{
        i=pointer;
        pointer++;
      }
    }
  }
  return false;
}
// const arr = [1,1,1]
// const brr = [1,1]
// console.log(subArr(arr,brr));

//三个数相加
function sumTreeNum(arr,sum){
  const len = arr.length;
  const result = [];
  if(len<3){
    return [];
  }
  arr = arr.sort();
  let second = 0,three = 0;
  for(let i = 0; i<len;i++){
    if(arr[i]>sum)  break;
    if(i>0 && arr[i] == arr[i-1]) continue;
    let target = sum-arr[i];
    second = i+1;
    three = len-1;
    while( second< three){
      if(arr[second] + arr[three] == target){
        let item = [arr[i],arr[second],arr[three]];
        result.push(item);
        while(second< three &&　arr[second] == arr[second+1]) second++;
        while(second< three &&　arr[three] == arr[three-1]) three--;
        second++;
        three--;
      }else if(arr[second] + arr[three] < target){
        second++;
      }else {
        three--;
      }
    }
  }
  return result;
}
const arr = [1,2,5,6,3,4,1]
const result = sumTreeNum(arr,7)
console.log(result)