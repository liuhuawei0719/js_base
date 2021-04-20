const drag = document.getElementById('drag')


// drag.addEventListener('drag',function (e) {
//
//     setTimeout(()=>{
//         if(timer) {
//             return
//         }
//         console.log(e.offsetX,e.offsetY)
//         timer = null
//     },500)
//
// })
function debounce(fn, delay) {
    let timer = null
    return function () {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}
function throttle(fn,delay) {
    let timer = null
    return function () {
        timer = setTimeout(()=>{
            if(timer){
                return
            }
            fn.apply(this,arguments)
            timer = null
        },delay)
	}
}

drag.addEventListener('drag',throttle((e)=>{
    console.log(e.offsetX,e.offsetY)
},500))

