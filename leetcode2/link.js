class Link{
  constructor(val,next){
    this.val = val || 0;
    this.next = next || null;
  }
}
function getLink(head,n){
  let fistnode = new Link();
  fistnode.next = head;
  let second = fistnode;
  let i = 0;
  while(i<=n){
    fistnode = fistnode.next;
    i++
  }
 
  while(fistnode){
    fistnode = fistnode.next;
    second = second.next
  }
  
  return second.next.val;
}

const head = {
  val:1,
  next:{
    val:2,
    next:{
      val:3,
      next: {
        val: 4,
        next: {
          val:5,
          next: null
        }
      }
    }
  }
}

//console.log(getLink(head,4));

function reverse(pHead){
  var prev = null;
  var next = null;
  while(phead){
    next = phead.next;
    phead.next = prev;
    prev = phead;
    phead = next;
  }
}


function reverse(pHead){
  let prev=null,next=null;
  while(pHead){
    next = pHead.next;
    pHead.next = prev;
    prev = pHead;
    pHead = next;
  }
  return prev
}
console.log(JSON.stringify(reverse(head)));


const arr = [23,11,34,67,4,2]
var quickSort = function(arr){
  if(arr.length<=1){
    return arr
  }
  let left =[],right=[];
  let midIndex = Math.floor(arr.length/2);
  let mid = arr.splice(midIndex,1)[0];
  for(let i=0;i<arr.length;i++){
    arr[i]>mid?right.push(arr[i]):left.push(arr[i])
  }
  return quickSort(left).concat(mid,quickSort(right))
}
//let result = quickSort(arr)
//console.log(result)

function bigNum(str1,str2){
  let len1 = str1.length;
  let len2 = str2.length;
  if(len1===0 || len2===0){
    return len1||len1
  }
  str2 = '0'+str2
  str1 = '0'+str1
  if(len1>len2){
    for(let i=0;i<len1-len2;i++){
      str2 = '0'+str2
    }
  }
  if(len1<len2){
    for(let i=0;i<len2-len1;i++){
      str1 = '0'+str1
    }
  }
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  for(let i=arr1.length-1;i>=0;i--){
    let temp = parseInt(arr1[i]) + parseInt(arr2[i])
    arr1[i] = temp%10;
    arr1[i-1] = Math.floor(temp/10) + parseInt(arr1[i-1])
  }
  return arr1[0] == 0 ? arr1.join('').substring(1) : arr1.join('')
}

// console.log(bigNum('123','945'));

function merge(leftArr, rightArr){
  let leftLen = leftArr.length;
  let rightLen = rightArr.length;
  let i=0,j=0,arr=[];
  while(i<leftLen && j<rightLen){
    leftArr[i]<rightArr[j]?arr.push(leftArr[i++]):arr.push(rightArr[j++])
  }
  while(i<leftLen){
    arr.push(leftArr[i++])
  }
  while( j<rightLen){
    arr.push(rightArr[j++])
  }
  return arr;
}

var mergeSort = function(arr){
  let len = arr.length;
  if(len <=1){
    return arr
  }
  let mid = Math.floor(len/2)
  return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)))
}
var result = mergeSort([22,11,23,34,55,67,4,2,44])
//console.log(result)
