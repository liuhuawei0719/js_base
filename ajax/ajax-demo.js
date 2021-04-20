//get
// const xhr = new XMLHttpRequest()   //true表示异步 false表示同步
// xhr.open('GET','/ajax/data.json',true)
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4){
//         if(xhr.status ===200){
//             console.log(JSON.parse(xhr.responseText))
//
//         }else if(xhr.status === 404){
//             console.log('404 not found')
//         }
//     }
// }
// xhr.send(null)


//post   //true表示异步
/*const xhr = new XMLHttpRequest()
xhr.open('POST','/login',true)
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        if(xhr.status ===200){
            //将返回的数据转换为json
            console.log(JSON.parse(xhr.responseText))

        }else {
            console.log('222')
        }
    }
}
const postData = {
    username: 'zhangsan',
    password: '123'
}

//将json转换为string
xhr.send(JSON.stringify(postData))*/


function ajax(url) {

    debugger
    const p = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange = function () {
            if(xhr.readyState ===4 ){
                if(xhr.status === 200){
                    resolve (JSON.parse(xhr.responseText))
                }else if(xhr.status === 404){
                    reject (new Error('404 not found'))
                }
            }

        }
        xhr.send(null)
    })

    return p
}
ajax('/ajax/data.json').then((res) => {
    console.log(res)
}).catch((err)=> {
    console.log(err)
})
