// new 的实现过程
function myNew(obj,...rest){
  const newObj = {};
  newObj.__proto__ = ooj.prototype;
  const result = obj.apply(newObj,rest);
  return typeof result === 'object' ?result:newObj;
}

//1，组合继承（最优）
function A(){}
function B(){
  A.call(this)
}
B.prototype = Object.create(A.prototype)
B.prototype.constructor = B
//let b = new B()
//以上就达到了继承想要的目的：父类私有变子类私有，父类公有变子类公有。当然这种方式也有着很多的漏洞，在ES6 class实现源码中还做了更多的边缘判断。


//2.原型继承
function A(){}
function B(){
  A.call(this)
}
B.prototype = new A()
B.prototype.constructor = B
//let b = new B()
// 缺点：因为没有父类实例无法继承父类原型上公有属性和方法，只能继承父类私有属性和方法为子类私有属性和方法

//3.call寄生继承
function A(){}
function B(){
  A.call(this)
}
//let b = new B()
// 缺点：因为没有父类实例无法继承父类原型上公有属性和方法，只能继承父类私有属性和方法为子类私有属性和方法

//函数科里化
function curry(){
  let _args = [...arguments];
  var _curry = function(){
    _args.push(...arguments)
    return curry;
  }
  _curry.toString=function(){
    return _args.reduce((prev,cur)=>{
      return prev + cur
    },0)
  }

  return _curry
}
console.log(curry(1)(2)(3))


//数组扁平化的几种方法
let arr = [1,2,3,[2,3,[2,1]]]

function flat1(arr) {
  let result = null;
  result = arr.toString().split(',')
  result.map(item => {
    return Number(item)
  })
}

function flat2(arr) {
  return arr.reduce((prev,cur)=>{
    return Array.isArray(cur) ? prev.concat(_flat(cur)) : prev.push(cur)
  })
}

function flat3(arr) {
  return arr.flat(arr, Infinity)
}
console.log(flat3(arr))

// call apply bind
Function.prototype.myCall = function(obj,...args){
  myObj = obj || window
  myObj.fn = this;
  const result = myObj.fn(...args);
  delete myObj['fn'];
  return result;
}
Function.prototype.myApply = function(obj,args){
  myObj = obj || window
  myObj.fn = this;
  const result = myObj.fn(...args);
  delete myObj['fn'];
  return result;
}

Function.prototype.myBind = function(context,...args){
  context = context || window
  var outArgs = Array.prototype.slice.call(args)
  var _this = this
  return function(){
    var innerArgs = Array.prototype.slice.call(arguments)
    var args = outArgs.concat(innerArgs);
    return _this.apply(context,args)
  }
}

//防抖节流
function debounce(fn,delay){
  let timer = null;
  return function(){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,arguments)
    },delay);
  }
}

function trottle(fn,delay){
  let timer = null;
  return function(){
    if(timer) return
    timer = setTimeout(()=>{
      fn.apply(this,arguments)
    },delay);
  }
}

//手写promise封装axios
function myAxios(){
  return new Promise((resolve,reject)=>{
    try{
      const xml = new XMLHttpRequest();
      xml.open('get','/',true);
      xml.send()
      xml.onreadystatechange = function(){
        if(xml.readyState === 200){
          if(xml.status = 4){
            const result = xml.responseText;
            resolve(result)
          }
        }
      }
    }catch(e){
      reject(e)
    }
  })
}

//实现数组中的map方法
Array.prototype.myMap = function(fn,cbThis){
  let res = [];
  let cbThis = cbThis || null;
  this.reduce((prev,cur,index,arr)=>{
    res.push(fn.call(this,cur,index,arr))
  },null)
  return res;
}


//实现一个sleep函数
function mySleep1(fn,delay){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const result = fn.call(this)
      resolve(result)
    },delay)
  })
}

function mySleep2(delay){
  yield new Promise((resolve)=>{
    setTimeout(resolve,delay)
  })
}


//promise.all方法实现
function myPromiseAll(promises) {
  return new Promise((resolve,reject)=>{
    let values = [],flag = 0;
    for(let i = 0; i<promises.length; i++){
      promises[i].then(v=>{
        values[i] = v;
        flag++;
        if(flag === promises.length){
          resolve(values)
        }
      },(r)=>{
        reject(r)
      })
    }
  })
}

function myPromiseRace(promises) {
  return new Promise((resolve,reject)=>{
    let values = [],flag = 0;
    for(let i = 0; i<promises.length; i++){
      promises[i].then(v=>{
          resolve(values)
      },(r)=>{
        reject(r)
      })
    }
  })
}

function myPromiseAllsettled(promises) {
  return new Promise((resolve,reject)=>{
    let values = [],flag = 0;
    for(let i = 0; i<promises.length; i++){
      promises[i].then(v=>{
        values[i] = {status:'fufilled',value:v}
      },err=>{
        values[i] = {status:'rejected',reason:error}
      }).finally(()=>{
        if(!--count){
          resolve(values)
        }
      })
    }
  })
}

//深拷贝
function deepClone(obj){
  if(!obj || typeof obj !== 'object'){
    return obj
  }
  let result = {}
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

//LRUCache
var LRUCache = function(capacity){
  this.capacity = capacity;
  this.cache = new Map();
}
LRUCache.prototype.get = function(key){
  if(this.cache.has(key)){
    let result = this.cache.get(key)
    this.cache.delete(key);
    this.cache.set(key)
    return result
  }else{
    return -1;
  }
}
LRUCache.prototype.put = function(key){
  if(this.cache.has(key)){
    this.cache.delete(key)
  }else if(this.cache.size >= this.capacity){
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key)
}

//快速排序法
var quickSort = function(arr) {
  if(arr.length <= 1){
    return arr;
  }
  let left= [], right=[],len = arr.length;;
  let pointerIndex = Math.floor(arr.length/2);
  let pointer = arr.splice(pointerIndex,1)[0];
  for(let i = 0; i<len;i++){
    if(arr[i]>pointer){
      right.push(arr[i])
    }else{
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(pointer,quickSort(right))
}

// 数组全排列 时间复杂度O(n*n!)）
var permArr = function(arr){
  let result = [],used = [],len = arr.length;
  function _dfs(depth){
    if(depth.length == len){
      result.push(result.slice());
    }
    for(let num of arr){
      if(used[num]) continue;
      used[num] = true;
      depth.push(num);
      _dfs(depth)
      used[num] = false
      depth.pop();
    }
  }
  _dfs([])
  return result;
}

//字符串全排列 
var permStr = function(str){
  let result = new Set();
  let used={},len = str.length;
  function _dfs(depth){
    if(depth.length === len) {
      result.add(path)
    }
    for(let i=0; i<len;i++){
      if(used[i]) continue;
      used[i] = true;
      _dfs(depth+str[i])
      used[i] = false;
    }
  }
  _dfs([])
  return result;
} 

// 链表翻转
function linkReverse(head){
  let next=null,prev=null;
  while(head){
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
}


// 链表倒数第N个节点
class link{
  constructor(val,next){
    this.val = val || -1;
    this.next = next || null
  }
}
function getNode(head,n){
  let fastLink = new link(),i=0;
  fastLink.next= head;
  let slowLink = fastLink;
  while(i<=n){
    shead = shead.next
    i++
  }
  while(fastLink){
    slowLink = slowLink.next;
    fastLink = fastLink.next;
  }
  return slowLink.next.val;
}

// 二叉树前序遍历
function preorder(root){
  if(!root){
    return []
  }
  const stack=[root],result=[];
  while(stack.length){
    var top = stack.pop();
    if(top.right){
      stack.push(top.right)
    }
    if(top.left){
      stack.push(top.left)
    }
    result.push(top.val);
  }
  return result;
}

//二叉树中序遍历
function inOrder(root){
  const stack=[],result=[];
  while(stack.length || root){
    while(root){
      stack.push(root)
      root = root.left
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right
  }
  return result;
}

//二叉树后序遍历
function postOrder(root){
  const stack=[root],result=[];
  while(stack.length){
    let top = stack.pop();
    result.unshift(top.val);
    if(top.left){
      stack.push(top.left)
    }
    if(top.right){
      stack.push(top.right)
    }
  }
  return result
}

//二茶树层级遍历
function level(root){
  const queue=[root],result=[];
  while(stack.length){
    let node = queue.shift();
    result = node.val;
    if(node.left){
      queue.push(node.left)
    }
    if(node.right){
      queue.push(node.right)
    }
  }
  return result;
}

//判断二叉树是否对称
function isSymmetric(root){
  if(!root) return true;
  var _isSymmetric  = function(left, right){
    if(!left && !right) return true;
    if(!left || !right) return false;
    return left.val === right.val && _isSymmetric(left.left,right.right) && _isSymmetric(left.right,right.left)
  }
  return _isSymmetric(root.left,root.right)
}

//二叉树的最长路径
function maxDepth(root){
  if(!root){
    return 0
  }
  let dep = 0;
  return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
}

//最大堆
function heapSort(items){
  let heapSize = items.length - 1;
  buildHeap(items, heapSize)
  for(let i = items.length - 1; i>=0; i--){
    swap(items,0,i)
    heapSize--;
    heapify(items,heapSize,i)
  }
}

function buildHeap(items, heapSize){
  for(let i = Math.floor(heapSize/2); i>=0; i--){
    heapify(items,heapSize,i)
  }
}

function heapify(items,heapSize,i){
  while(true){
    var maxIndex = i;
    if(2*i <= heapSize && items[i]<items[2*i]){
      maxIndex = 2*i;
    }
    if(2*i+i <= heapSize && items[maxIndex]<items[2*i]){
      maxIndex = 2*i+1;
    }
    if(maxIndex === i) break;
    swap(items,i,maxIndex)
    i = maxIndex
   }
}

function swap(items,i,j){
  let temp = items[i];
  items[i] = items[j];
  items[j] = temp
}






