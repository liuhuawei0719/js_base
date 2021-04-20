function bindEvent(el,type,selector,fn) {
    if(fn==null){
        fn = selector
        selector = null
    }
    el.addEventListener(type,event => {
        const target = event.target
        if(selector){
            //代理绑定
            if(target.matches(selector)) {
                fn.call(target,event)
            }
        }
        else{
            fn.call(target,event)
        }
    })
}

const div2 = document.getElementById('div2')
const pd = document.getElementById('d')
const body = document.body


bindEvent(div2,'click', function(event) {
    //event.stopPropagation() //阻止向上冒泡
    //console.log(el.target)
    event.preventDefault() //阻止默认行为
    alert(this.innerHTML)
})

bindEvent(pd,'click', 'p', function(event){
    //console.log(el.target)
    event.preventDefault() //阻止默认行为
    alert(this.innerHTML)
})


