function loadImg(src) {
    return new Promise(
        (resolve,reject)=>{
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        },
        img.onerror = () => {
            const err = new Error(`图片加载失败 ${src}`)
            reject(err)
        }
        img.src = src
    })
}

const url1 = '1.png'
const url2 = '2.png'
loadImg(url1).then((img)=>{
    console.log(img.width)
    return loadImg(url2)
}).then((img2)=>{
    console.log(img2.width)
}).catch((err)=>{
    console.log(err)
})
