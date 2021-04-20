let name = Symbol("jyy");
let obj = {
  name: 'beijing',
  [name]: 'heibei'
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj[name]);
for(let item in obj){
  //console.log(item)
}

console.log(Reflect.ownKeys(obj)) //[ 'name', Symbol(jyy) ]