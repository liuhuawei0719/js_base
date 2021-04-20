function fibo(n, current=0,next = 1){
  if(n==0) return 1;
  if(n==1) return next;
  return fibo(n-1,next,current+next)
}

//console.log(fibo(7))

function isChildrenArr(parent,child){
  if(parent.length<=0){
    return false;
  }
  if(child.length<=0){
    return true;
  }
  if(parent.length<child.length) return false
  const length = parent.length;
  let i = 0,j=0;
  while(i<length){
    while(i<length && parent[i] != child[j]){
      i++
    }
    console.log(i)
    while(j<child.length && parent[i] == child[j]){
      console.log(parent[i],child[j])
      i++;
      j++
    } 
    if(j == child.length){
      return  true;
    }else{
      return false;
    }
  }
  return true;
}
const parent = [1,2,3,4,6,8]
const child = []
console.log(isChildrenArr(parent,child))


function A(name){
  this.name = name
}
function B(A,age,name){
  A.call(this,name)
  this.age = age
}

B.prototype = new A("dd")
B.prototype.constructor = B

