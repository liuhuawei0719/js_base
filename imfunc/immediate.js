// (function sum(a,b){
//   console.log(a+b)
// }(1,2))

// (function sum(a,b){
//   console.log(a+b)
// })(1,2)

for(var i = 1; i<=10;i++){
  (function(ii){
    console.log(ii)
  })(i)
}