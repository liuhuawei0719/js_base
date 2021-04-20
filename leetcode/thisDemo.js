var name ="11" ,age=13;
var obj = {
  name:"22",
  objAge:this.age,
  myFun: function(){
    console.log('this',this)
    console.log('name=',this.name,'age',this.age)
  },
  myFun1: ()=>{
    console.log('name=',this.name,'age',this.age)
  },
}

console.log(obj.objAge)
obj.myFun()
obj.myFun1()

