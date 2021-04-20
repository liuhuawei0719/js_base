const arr = [12,7,8,99,44,4,45]

function max(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(compare(arr[i],arr[j])){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
      }
    }
  }
  console.log(arr.join(''))
}
max(arr)
//console.log(arr)
function compare(a,b){
  let ab = a+''+b
  let ba = b+''+a
  if(ab<ba){
    return true
  }else{
    return false
  }
}

window.addEventListener('visibilitychange',(res)=>{
  console.log(res.target.hidden)
})