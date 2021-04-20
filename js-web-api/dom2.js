const list = document.getElementById('div2')

//创建一个文档片段，此时还没有插入到DOM结构中
const frag = document.createDocumentFragment()


for(let i=0 ;i<10; i++){
    const p = document.createElement('p')
    p.innerText = `this is ${i} p`

    //先插入文档片段中
    frag.appendChild(p)
}

list.appendChild(frag)
