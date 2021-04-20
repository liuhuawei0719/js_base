function CustomType(){
  this.name = "enhance"
}

CustomType.prototype.getName = function() {
  return this.name;
}

var application = (function(){
  var privateA = 'a'
  function A() {};
  var obj = new CustomType();
  obj.A = privateA;
  obj.B = function(){
    return privateA
  }
  return object
})()

console.log(application)