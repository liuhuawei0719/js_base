// function fn1(a,b,c) {
//     console.log('this',this);
//     console.log(a,b,c);
//     return 'this is fn1'
// }
//
// const fn2 = fn1.bind({x:100},10,20,30)
// const res = fn2()
// console.log(res)


Function.prototype.bind1 = function () {

    const args = Array.prototype.slice.call(arguments)
    const t = args.shift()
    const self = this
    return function () {
        return self.apply(t,args)
    }
}
function fn1(a,b,c) {
    console.log( Array.from(arguments))
    console.log( Object.values(arguments))
    // console.log(arguments)
    // console.log(arguments instanceof Object)
    // console.log('this',this);
    // console.log(a,b,c);
    return 'this is fn1'
}
const fn2 = fn1.bind1({x:100},10,20,30)
const res = fn2()
console.log(res)
