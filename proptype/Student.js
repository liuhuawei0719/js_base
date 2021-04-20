class Student {
    constructor(name, number){
        this.name = name
        this.number = number
    }
    sayHi() {
        //反引号可以插入变量
        console.log(`姓名${this.name}, 学号${this.number}`)
    }
}

const bella = new Student('bella',10010)
bella.sayHi()

const madongmei = new Student('madongmei', 10011)
madongmei.sayHi()


