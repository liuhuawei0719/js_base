const data = [
  {
      name: 'a',
      children: [
          { name: 'b', children: [{ name: 'e' }] },
          { name: 'c', children: [{ name: 'f' }] },
          { name: 'd', children: [{ name: 'g' }] },
      ],
  },
  {
      name: 'a2',
      children: [
          { name: 'b2', children: [{ name: 'e2' }] },
          { name: 'c2', children: [{ name: 'f2' }] },
          { name: 'd2', children: [{ name: 'g2' }] },
      ],
  }
]

function getNameDfs(data){
  const result = [];
  data.forEach(item => {
    const map =(data)=>{
      result.push(data.name);
      data.children && data.children.forEach(child=>map(child))
    }
    map(item)
  });
  return result.join(',')
}


function getNameWfs(data){
  let queue = data;
  let result = [];
  while(queue.length>0){
    [...queue].forEach((item)=>{
      result.push(item.name);
      queue.shift();
      item.children && (queue.push(...item.children))
    })
  }
  return result.join(',')
}

const arr=[1,2,3,4,5,6]
function getPermK(arr,k){
  const result = [];
  if(Array.isArray(arr)){
    let length = arr.length;
    if(k>length){
      return result
    }else{
      for(let i=0 ;i<=arr.length-k; i++){
        if(k==1){
          result.push(arr[i]+'')
          continue;
        }
        for(let j=i+1 ;j<=arr.length-k+1; j++){
          let resultItem = [];
          resultItem.push(arr[i]+'',...arr.slice(j,j+k-1))
          result.push(resultItem.join(''))
        }
      }
      return result;
    }
  }
}
// console.log(getPermK(arr,6));

const flat = {
  'a': 'a',
  'b': 'b',
  'c': {c1:'c1',c2:'c2',k:[1,2]},
  'd': [11,12,[21,22,[31,32,{e:'e',f:'f'}]]]
}
const flat1 =[11,12,[21,22,[31,32]]]


function flation(flat){
  let result = {}
  function _flat(prekey,flat){
    if(typeof flat !== 'object'){
      return flat
    }
    if(Array.isArray(flat)){
      for(let i=0;i<flat.length;i++){
        let arrk = prekey?`${prekey}[${i}]`:`${i}`
        typeof flat[i] === 'object'?_flat(arrk,flat[i]):result[arrk] = flat[i]
      }
    }else{
      for(let key in flat){
        let objk = prekey?`${prekey}.`:``
        typeof flat[key] === 'object' ?_flat(objk+key+'',flat[key]):result[objk+key+''] = flat[key]
      }
    }
  }
  _flat('',flat)
  return result
}
console.log(flation(flat));

const o= {
  "a":1,
  "b":2,
  "A": {
      "a1": 1,
      "a2": 2
  },
  "B": {
      "b": 3
  },
  "c":[1,2,3,[3,4,5,{d:'d'}]]
}

var comType=['object','array'];
function plat(o,prekey,resobj){
    prekey=prekey?prekey+'.':'';
    var keys=Object.keys(o);
    keys.forEach(function(item){
        var v=o[item];
        var type=typeof v;
        if(v && comType.indexOf(type) != -1){
            plat(v,prekey+item,resobj);
        }else{
            resobj[prekey+item]=v;
        }
    })
}
var result={};
plat(o,'',result);
console.log(result);




