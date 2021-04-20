function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var kthLargest = function(root, k) {
  let setArray = [];
  const dfs = function(node){
    if(node === null){
      return
    }
    dfs(node.right)
    setArray.push(node.val);
    dfs(node.left)
  }
  dfs(root);
  return setArray[k-1]
};





var kthLargest1 = function(root, k) {
  let setArray = [];
  const deep = function(node){
    if(!node){
      return
    }

    deep(node.right)
    setArray.push(node)
    deep(node.left)
  }
  deep(root)
  return setArray[k-1]
};




var maxDepth = function(root) {
  if (root == null) {
      return 0;
  } else {
     let lengthLeft = maxDepth(root.left);
     let lengthright = maxDepth(root.right);
     return Math.max(lengthLeft,lengthright)+1;
  }
}


var a = [1,2,[1,2,3,[2,3,4]]]


var flat = function(arr){
  return arr.reduce((prev,current) =>{
    return prev.concat(Array.isArray(current) ? flat(current):current)
  },[])
}

var flat1 = function(arr){
  if(!arr || !Array.isArray(arr)){
    return arr
  }
  let setArray = []
  function comp(item){
    for(let i = 0;i<item.length;i++){
       if(Array.isArray(item[i])){
         comp(item[i])
       }else{
         setArray.push(item[i])
       }
    }
  }
  comp(arr)
  return setArray
}
console.log(flat1(a))



const reverseList = (head) => {
  if (head == null || head.next == null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null; 
  return p;
};

const reverseList = (head) => {
  let pre,cur,next;
  pre = null,cur = head,next = null;
  while(cur !== null) {
    next = cur.next; //3
    cur.next = pre;  //1
    pre = cur; // 2
    cur = next; //3
  }
  return pre;
};


function BinarySearchTree() {
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  
  // 插入
  this.insert = function(key){
    let newNode = new Node(key);
    if(root === null){
      root = newNode; 
    }else{
      insertNode(root, newNode)
    }
  }
  function insertNode(node, newNode) {
    if(node.key > newNode.key){
      if(node.left === null){
        node.left = newNode
      }else{
        insertNode(node.left,newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        insertNode(node.right,newNode)
      }
    }
  } 
  
  // 查找
  this.search = function(key){}
  
  // 删除
  this.remove = function(key){}
  
  // 最大值
  this.max = function(){}
  
  // 最小值
  this.min = function(){}
  
  // 中序遍历
  this.inOrderTraverse = function(){}
  
  // 先序遍历
  this.preOrderTraverse = function(){}
  
  // 后序遍历
  this.postOrderTraverse = function(){}
}








