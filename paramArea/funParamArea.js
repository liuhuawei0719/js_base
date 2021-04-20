function setName(obj){
  obj.name = 'hello';
  obj = new Object();
  obj.name = 'hi';
  return obj
}
var person = new Object();
setName(person)
// console.log(person.name)

const a = {name:"222"}
const map = new Map()
map.set(a,"33")
const b = {}
b[a] = 1

console.log(JSON.stringify(b),map)
