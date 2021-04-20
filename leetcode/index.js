//数组去重
var removeDuplicates = function(nums) {
  if(Array.isArray(nums) && nums.length>0){
    var i = 0; var j=1;
    for(j=1;j<nums.length;j++){
      if(nums[j]!=nums[i]){
        i++;
        nums[i] = nums[j];
      }
    }
    return i+1
  }else{
    return 0
  }
};
//console.log(JSON.stringify(removeDuplicates([1,1,2,2,3,4,5,5])))




var join = function(nums) {
  var result=[];
  if(Array.isArray(nums) && nums.length>0){
    var j=1;
    var temp = 0;
    for(j=1;j<nums.length;j++){
      if(nums[j]-nums[j-1] !== 1){
        if(j-temp >1){
          result.push(nums[temp]+ '-' +nums[j-1])
        }else {
          result.push(nums[j-1]+'')
        }
        if(j-temp <=1 && j == nums.length-1 ){
          result.push(nums[j]+'')
        }
        temp=j
      }else if(j == nums.length-1 && nums[j]-nums[j-1] == 1){
        result.push(nums[temp]+ '-' +nums[j])
        temp=j
      }
    }
  }
  return result;
};

//console.log(JSON.stringify(join([1,1,2,22,2,2,3,6,7,8,9,9,10])))


//合并两个有序链表
var mergeTwoLists = function(l1, l2) {
  const preHead = new ListNode();
  let prev = preHead;
  while(l1 && l2) {
    if(l1.val < l2.val){
      prev = l1.val;
      l1 = l1.next;
    }else {
      prev = l2.val;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1?l1:l2
  return preHead
};

function ListNode(val, next){
  this.val = val;
  this.next = next;
}

//去除链表数组中的重复项
var deleteDuplicates = function(head) {
  var cur = head;
  while(cur && cur.next) {
    if(cur.val === cur.next.val){
      //可能下下的节点还是更当前节点相同，
      //所以到当前节点不等于下下的节点时，才把当前节点移动到下一个节点
      cur.next = cur.next.next;
    }else{
      cur = cur.next;
    }
  }
  return head;
};

//判断链表数组是不是回环数组


// 双指针法
// 龟兔赛跑，兔子每次走两步，乌龟每次一步，若乌龟能赶上兔子，则存在环；若兔子走到终点，则不存在环。
// 乌龟起始点在 head 处，兔子起始点在 head.next 处。
var hasCycle = function(head) {
  if(!head && !head.next){
    return false;
  }
  var node1 = head;
  var node2 = head.next;
  while (node1!==node2){
    if(node2 !==null && node2.next!=null){
      node1 = node1.next;
      node2 = node2.next.next;
    }else{
      return false
    }
  }
  return true;
};

//遍历数组，若出数组的某个值出现了两次，这表示存在闭环
var hasCycle1 = function(head) {
  if(head ===null){
    return false
  }
  var arr = [];
  while(arr.indexOf(head) !== -1){
    
      arr.push(head)
      head = head.next
      if(head === null){
        return false;
      }
  }
  return true;
  
};



// 定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
// 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

var pivotIndex = function(nums) {
  const total = nums.reduce((prev,cur) => prev+ cur,0)
  let sum = 0;
  for(let i = 0;i<nums.length;i++){
    if((2*sum+nums[i]) === total){
      return nums[i]
    }else{
      sum =sum+ nums[i]
    }
  }
  return -1;
};

//var result = pivotIndex([1,7,3,6,5,6])
//console.log(JSON.stringify(result))

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
var isValid = function(s) {
  if(!s || typeof s !== 'string' || s.length%2 !==0){
    return false
  }
  const kuohao = {'{':'}','[':']','(':')'};
  let stack = [s.charAt(0)];
  for(let i=1;i<s.length; i++){
    let top = stack[stack.length-1];
    // var flag1 = (s.charAt(i) === kuohao[1]) && (top=== kuohao[0]);
    // var flag2 = (s.charAt(i) === kuohao[3]) && (top=== kuohao[2]);
    // var flag3 = (s.charAt(i) === kuohao[5]) && (top=== kuohao[4]);
    // if(flag1 || flag2 || flag3){
    if(kuohao[top] === s.charAt(i)){
      var a = stack.pop();
    }else{
      stack.push(s.charAt(i))
    }
  }
  return stack.length>0 ? false:true;
};
//const result = isValid("{[{{{{}}]}{}{}")
//console.log(JSON.stringify(result))


// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
//如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
var searchInsert = function(nums, target) {
  if(nums.indexOf(target) !== -1){
    for(let i = 0 ;i<nums.length-1; i++){
      if(nums[i] === target){
        return i;
      } 
    }
  }else{
    var result = midSerach(nums,target,0,nums.length-1)
    return result;
  }
};

var midSerach = function(arr,target,l,r){
  var ans = 0;
  while (l<=r){
    let mid = parseInt((l+r)/2);
    if(target <=arr[mid]){
      ans = mid;
      r = mid-1;
    }else{
      l = mid+1
    }
  }
  return ans
}

//var result = searchInsert([1,3,5,6], 7)
//console.log(result);

var removeElement = function(nums, val) {
  if(nums && nums.length>0){
    var pose = 0;
    for(let j = 0;j<nums.length;){
      if(nums[j] === val){
        j=pose;
        var a = nums.splice(j,1);
      }else{
        pose++;
        j++
      }
    }
  }
  console.log(JSON.stringify(nums))
  return nums.length
};
//console.log(removeElement([0,1,2,2,3,0,4,2],2));


//罗马数字转整数

var romanToInt = function(s) {
  const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
  let result  = roman[s.charAt(0)];
  for(let i = 1; i<s.length;i++){
    let cur = roman[s.charAt(i)];
    let prev = roman[s.charAt(i-1)];
    if(cur>prev){
      result  = result - 2*prev + cur
    }else{
      result = result + cur;
    }
    
  }
  return result;
};
//console.log(romanToInt('LVII'));


//编写一个函数来查找字符串数组中的最长公共前缀。
//如果不存在公共前缀，返回空字符串 ""。

//横向比较
var longestCommonPrefix1 = function(strs) {
  if(!strs || !Array.isArray(strs) || strs.length == 0){
    return ''
  }
  let prefix = strs[0];
  for(let i = 1;i<strs.length;i++){
    let cur = strs[i];
    for(let j = 0;j<prefix.length;j++){
      if(prefix.charAt(j) !== cur.charAt(j)){
        prefix = prefix.substring(0,j)
        continue;
      }else{
        if(prefix.length ==0){
          break;
        }
      }
    }
  }
  return prefix;
};

//纵向比较
var longestCommonPrefix2 = function(strs) {
  if(!strs || !Array.isArray(strs) || strs.length == 0){
    return ''
  }
  let start = strs[0];
  for(let i = 0;i<start.length;i++){
    for(let j = 1;j<strs.length;j++){
      let curChar = strs[j].charAt(i)
      if(!start ||(!curChar) || (curChar !== start.charAt(i)) ){
        start = start.substring(0,i)
        break;
      }
    }
  }
  return start;
};

//二分法比较
var longestCommonPrefix = function(strs) {
  if(!strs || !Array.isArray(strs) || strs.length == 0){
    return ''
  }
  let minLength = strs[0].length;
  strs.forEach((item)=>{
    if(item.length < minLength){
      minLength = item.length;
    }
  })
  console.log(minLength)
  
  let l = 0;r = minLength;
  while(l<r){
    let mid = parseInt((r-l+1)/2+l);
    console.log(mid)
    if(isCommonPrefix(strs,mid)){
      l = mid;
    }else{
      r = mid-1
    }
  }
  console.log(l)
  return strs[0].substring(0,l);
};

var isCommonPrefix = function(arr,length){
  let str0 = arr[0].substring(0,length);
  let count = arr.length;
  for(let i = 1;i<count;i++){
    for(let j = 0;j<length;j++){
      if(str0.charAt(j) !== arr[i].charAt(j)){
        return false;
      }
    }
  }
  return true;
}


//验证回文串
var isPalindrome = function(s) {
  let str = s.toLocaleLowerCase().replace(/[^\da-zA-Z]/g,'');
  let l=0,r=str.length-1;
  while(l<=r){
    if(str.charAt(l) === str.charAt(r)){
      l++;
      r--;
    }else{
      break;
    }
  }
  return l>r ? true:false
};



//对称二叉树
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var isSymmetric = function(root) {
  if(!root) {
    return true
  }
  return check(root,root)
};
function check1(p,q){
  if(!p && !q ){
    return true;
  }
  if(!p || !q){
    return false;
  }
  return p.val === q.val && check(p.left,q.right) && check(p.right,q.left)
}

function check(m,n){
 
  var queue = [m,n],p,q
  while(queue.length){
    p = queue.shift();
    q = queue.shift();
    if(!p && !q ){
      continue
    }
    if((!p || !q) || p.val !== q.val){
      return false;
    }
    queue.push(p.left)
    queue.push(q.right)
    queue.push(p.right)
    queue.push(q.left)
 
  }
  return true;
}

console.log(isPalindrome("race a car"));

