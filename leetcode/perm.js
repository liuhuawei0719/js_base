// perm function
var perm = function(s) {
  var result = [];
  if (s.length <= 1) {
    return [s];
  } else {
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
    
      var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
    
      var l = perm(newStr);
     
      for (var j = 0; j < l.length; j++) {
        var tmp = c + l[j];
        result.push(tmp);
      }
    }
  }
  return result;
};
//var arr = perm('qwer')
//console.log(arr)

var perms = function(s){
  if(s.length<=1){
    return [s]
  }
  let newStr = ''
  let result = []
  for(let i = 0;i<s.length;i++){
    let c = s.charAt(i);
    newStr = s.slice(0,i)+s.slice(i+1,s.length);


    let l = perms(newStr);
    for(let j=0;j<l.length;j++){
      let temp =c+l[j]
      result.push(temp)
    }
  }
  return result
}
 
//var arr = perms('qwer')
//console.log(arr.length)


function fun(s){
  if(s.length<=1){
    return [s]
  }
  let result = [];
  var one = str.substr(0,1);
  var left = str.substr(1);
  var leftResult = fun(left);
  for(i=0;i<leftResult.length;i++){
    for(j=0;j<leftResult[i].length+1;j++){
      result.push(leftResult[i].slice(0,j) + one +leftResult[i].slice(j))
    }
  }
}


const args = str => {
  if(str.length <= 2){
    return str.length ===2 ? [str,str[1]+str[0]]:[str];
  }
  return str.split('').reduce((acc,letter,i)=>
    acc.concat(args(str.slice(0,i)+str.slice(i+1)).map(val => letter +val))
  ,[])
}
const anagrams = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str.split('').reduce((acc, letter, i) =>
    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
};

console.log(args('sdfg'))



const perm = str => {
  if(str.length<=2){
    return str.length===2 ? [str, str.charAt(1)+str.charAt(0)]:[str];
  }
  return str.split('').reduce((acc,letter,i)=>{
    return acc.concat(perm(str.slice(0,i)+str.slice(i+1)).map(val => letter+val))
  },[])
}

