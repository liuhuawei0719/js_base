function heapSort(items,heapSize){
  heapBuid(items,heapSize)
  for(let i=items.length-1; i>=0; --i){
    swap(items,0,i)
    heapSize--
    heapify(items,heapSize,0)
  }
}


function heapBuid(items,heapSize){
  for(let i=Math.floor(heapSize/2); i>=0; --i){
    heapify(items,heapSize,i)
  }
}

function heapify(items,heapSize,i){
  while(true){
    let maxIndex = i;
    if(2*i <= heapSize && items[i]<items[2*i]){
      maxIndex = 2*i
    }
    if(2*i+1 <= heapSize &&  items[maxIndex]<items[2*i+1]){
      maxIndex = 2*i+1
    }
    if(maxIndex === i) break;
    swap(items,i,maxIndex);
    i = maxIndex;
  }
}

function swap(items, i,j){
  let temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

var items = [11,10,22,9, 2, 8, 33, 7, 44, 6, 5]
//heapSort(items,items.length-1)



const str = "a good   example"
function reverseWords(str){
  return str.trim().replace(/\s+/g,' ').split(" ").reverse().join(' ')
}
function reverseWords1(str){
  let right=str.length-1;
  let left = 0;
  let word = '';
  const queue = [];
  while(str.charAt(right) === ' ') right--
  while(str.charAt(left) === ' ') left++
  while(right>=left){
    let curChar = str.charAt(left)
    if(curChar === ' ' && word){
      queue.unshift(word)
      word=''
    }else if(curChar !==' '){
      word += curChar
    }
    left++;
  }
  queue.unshift(word)
  return queue.join(' ')
}


function linkJoin(linkA, linkB){
  while(linkA.next){
    linkA.flag = true;
    linkA = linkA.next;
  }
  while(linkB.next){
    if(linkB.flag){
      return linkB
    }
    linkB = linkB.next;
  }
  return null
}


function delNode(link,n){
  let i=1
  const head = link;
  const result = {}
  if(link && n==1){
    result = {'head':head}
    return result
  }
  //head.next = null
  while(i<=n && link.next){
    let curNode = link;
    let nextNode = curNode.next;
    if(i==(n-1) && nextNode){
      curNode.next = nextNode.next
    }else{
      curNode = link.next
      i++
    }
  } 
}

function midLink(head){
  let fast = head,slow = head
  while(fast && fast.next){
    fast=fast.next.next
    slow = slow.next
  }
  return slow

}


function reverseLink(head){
  if(!head && !head.next) return 
  let prev = null, cur=head;
  while(cur){
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  head = prev;
  return head;
}

console.log(reverseWords1(str))
