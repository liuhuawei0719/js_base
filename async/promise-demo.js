const url = '1.png'
const url2 = '2.png'
function logImg(src) {
  return new Promise(
      (resolve,reject) => {
          const img = document.createElement('img')
          img.onload = () => {
              resolve(img)
          }
          img.onerror = () => {
              const err = new Error(`图片加载失败 ${src}`)
              reject(err)
          }
          img.src = src
      }
  )
}
logImg(url).then(img1=> {
    console.log(img1.width)
    return img1
}).then(img1=>{
    console.log(img1.height)
    return logImg(url2)
}).then(img2=>{
    console.log(img2.width)
}).catch(
    ex => console.log(ex)
)





