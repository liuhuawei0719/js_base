const value = {number: 10}

const multiply = (x = {...value})=>{
  console.log(x.number *= 2)
}
// multiply(); //20
// multiply(); //20
// multiply(value) //20
// multiply(value) //40


// const spookyItems = ['ss1','D2ss','3ss']
// ({item: spookyItems[3]} = {item: '4'})

// console.log(JSON.stringify(spookyItems))

let name = 'bella'
function getName(){
  console.log(name)
  let name = 'tom'
}
getName()

//ReferenceError: Cannot access 'name' before initialization