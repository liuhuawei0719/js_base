
Function.prototype.myApply = function(myObj, args){
  console.log(args)
  console.log()
  myObj = myObj || window
  myObj['fn'] = this
  myObj['fn'](...args)
  delete myObj['fn'] 
}

Function.prototype.myCall = function(myObj, ...args){
  myObj = myObj || window
  myObj['fn'] = this
  myObj['fn'](...args)
  delete myObj['fn'] 
}

Function.prototype.myBind = function(){
  const args = Arrray.prototype.slice.call(arguments)
  const t = args.shift();
  const self = this;
  return function(){
    return self.apply(t,args)
  }
}


var person = {
  name: 'bella',
  age: 25
}

var name='world' 

function say(age,weight){
  //console.log('say '+this.name + " "+ age +" "+weight)
}


say.myApply(person,[12,20])
say.myCall(person,12,20)









