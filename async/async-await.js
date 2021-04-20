// function* foo(x) {
//   yield x+1
// try{
//   yield x+2
//  }catch(e){
//   console.log('catch it')
// }
// }
// const result = foo(0) // foo {<suspended>}
// result.next();  // {value: 1, done: false}
// result.next();  // {value: 2, done: false}
// result.throw();  // catch it {value: undefined, done: true}
// result.next();  //{value: undefined, done: true}


// function* foo1() {
//   yield 1;
//   yield 2;
//   return "foo1 end";
// }

// function* foo2() {
//   yield 3;
//   yield 4;
// }

// function* foo() {
//   yield* foo1();
//   yield* foo2();
//     yield 5;
// }

// const result = foo();

// console.log(result.next());// "{ value: 1, done: false }"
// console.log(result.next());// "{ value: 2, done: false }"
// console.log(result.next());// "{ value: 3, done: false }"
// console.log(result.next());// "{ value: 4, done: false }"
// console.log(result.next());// "{ value: 5, done: false }"
// console.log(result.next());// "{ value: undefined, done: true }"







function getNum(num){
  return new Promise((reslove,reject)=>{
    setTimeout(()=>{
      reslove(num+1)
    })
  })
}

function asyncFun(func){
  var gen = func();
  function next(data){
    var result = gen.next(data);
    if(result.done){
      return result.value;
    }else{
      result.value.then((data)=>{
        next(data)
      })
    }
  }
  next()

}

function* func(){
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  var f3 = yield getNum(f2);
  console.log(f3)
}


asyncFun(func)


