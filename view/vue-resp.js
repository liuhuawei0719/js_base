let obj = {
  name:'1',
  age: 12,
  card: {
    card1: 'c1',
    card: 'c2'
  }
}

let defineReactive = (obj,key,value) => {
  Object.defineProperty(obj,key,{
    get(){
      console.log('read')
      return value
    },
    set(newValue){
      console.log('write')
      if(value === newValue){
        return
      }
      value = newValue
      render();
    }
  });
}

let observer =(obj)=>{
  for(const k in obj){
    if(typeof obj[k] === 'object'){
      observer(obj[k])
    }else{
      defineReactive(obj,k,obj[k]);
    }
  }
}
let render = ()=>console.log("rendered!");

observer(obj);
obj.name = 'bb'

