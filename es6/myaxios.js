function getJson(url) {
  return new Promise((resolve,reject)=>{
    let xml = new XMLHttpRequest();
    xml.open('GET',url, true);
    xml.send();

    xml.onreadystatechange = function(){
      if(xml.readyState == 4){
        if(xml.status == 200) {
          try{
            let response = JSON.parse(xml.responseText);
            resolve(response);
          }catch(e){
            reject(e);
          }
        }
      }
    }
  })
}
getJson(url).then(()=>{

})




function quickSort(arr,l,r){
  let temp = arr[l];
  arr[l] = arr[(l+r)/2];
  arr[(l+r)/2] = temp;
  let i =l,j =r;
  while(i!=j){
    while(arr[j]>=temp && j>i){
      j--;
    }
    while(arr[i]<=temp && i<j){
      i++;
    }
    if(j>i){
      let swap = arr[i];
      arr[i] = arr[j];
      arr[j] = swap;
    }
  }
  arr[l] = arr[i];
  arr[i] = temp;
  quickSort(arr,l,i-1);
  quickSort(arr,i+1,l);
}

//模式
function singleInstance(){
  this.intance = null 
}

function getInstance(){
  if(!this.intance){
    this.intance =  new singleInstance();
  }
  return this.intance
}

var getInstance = (function(){
  var intance = null;
  return function(){
    if(!intance){
      intance = new singleInstance()
    }
    return intance
  }
})()

var a = getInstance();
var b = getInstance();
console.log(a===b)






