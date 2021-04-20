
var isValidBST = function(root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
      while (root !== null) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
      if (root.val <= inorder) {
          return false;
      }
      inorder = root.val;
      root = root.right;
  }
  return true;
};

var minDepth = function(root) {
  if(root == null) {
      return 0;
  }
  if(root.left == null && root.right == null) {
      return 1;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  if(root.left != null) {
      ans = Math.min(minDepth(root.left), ans);
  }
  if(root.right != null) {
      ans = Math.min(minDepth(root.right), ans);
  }
  return ans + 1;
};

var maxDepth = function(root) {
  if(!root){
      return 0;
  }
  let dep = 0;
  return dep = 1+ Math.max(maxDepth(root.left),maxDepth(root.right));
   
};

function maxDepth(root){
  if(!root){
    return 0;
  }
  let depth = 1+ Math.max(maxDepth(root.left),maxDepth(root.right))
  return depth;
}

var largestNumber = function(nums) {
  nums.sort((a,b)=>{
    a = a+'';
    b = b+'';
    anum = Number(a+b);
    bnum = Number((b+a));
    return bnum-anum
  })
  let result = nums.reduce((prev,cur)=>{
    if(cur === 0 && !Number(prev)){
      return prev
    }
    return prev+=cur
  },'')
  return result;
};

nums =[1,2,3,4,5,6,7,8,9,0]
// largestNumber(nums);
//console.log('nums=',largestNumber(nums) || 0)

var minDiffInBST = function(root) {
  if(!root){
      return 0;
  }
  if(!root.left && !root.right){
      return root.val
  }
  let min = Number.MAX_SAFE_INTEGER;
  let prev = root.val;

};

var minDiffInBST = function(root) {
  let ans = Number.MAX_SAFE_INTEGER, pre = -1;
  const dfs = (root) => {
      if (root === null) {
          return;
      }
      dfs(root.left);
      if (pre == -1) {
          pre = root.val;
      } else {
          ans = Math.min(ans, root.val - pre);
          pre = root.val;
      }
      dfs(root.right);
  }
  dfs(root);
  return ans;
};

function getMap(){
  var map = null;
  return (()=>{
    if(!map){
      map = new Map();
    }
    return map
  })()
}


function feibo(n){
  const map = getMap();
 
  function _feibo(n){ 
    if(map.has(n)){
      return map.get(n)
    }
    if(n==1){
      console.log('map1')
      map.set(1,1)
      return 1;
    }
    if(n==2){
      console.log('map2')
      map.set(2,1)
      return 1;
    }
    let res = _feibo(n-2)+_feibo(n-1);
    map.set(n,res)
    return res;
  }
  return _feibo(n)
}

console.log(feibo(7))

