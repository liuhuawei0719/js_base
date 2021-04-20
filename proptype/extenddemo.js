class People {
    constructor(name){
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat meat`)
    }
}

class Student extends People {
    constructor(name, number){
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`姓名${this.name}, 学号${this.number}`)
    }
}

class Teacher extends People {
    constructor(name, className){
        super(name)
        this.className = className
    }
    teach() {
        console.log(`姓名${this.name}, 课程${this.className}`)
    }
}

const bella = new Student('bella',10010)
//bella.sayHi()
//bella.eat()

const bella1 = new Teacher('bella1','Math')
//bella1.teach()
//bella1.eat()

// console.log(bella instanceof People) //true
// console.log(bella instanceof Object)  //true
// console.log(bella instanceof Student) //true
//
// console.log(typeof People) //function
// console.log(typeof Student) //function
// console.log(typeof Teacher) //function
//
// console.log([] instanceof Array) //true
// console.log([] instanceof Object) //true
console.log({} instanceof Object) //true

console.log(People.__proto__)
console.log(123) //true




