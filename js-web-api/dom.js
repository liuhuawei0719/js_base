const div = document.getElementById('div1')
const div2 = document.getElementById('div2')
const p1 = document.getElementById('test')
const divp = document.getElementById('p')

const p = document.createElement('p')
p.innerHTML='this is p elemet'



div.appendChild(p)
div2.appendChild(p1)

//console.log(p1.parentNode)

const childrenp = Array.prototype.slice.call(divp.childNodes)
const childrenp1 = childrenp.filter(child => {
    return child.nodeType!==3

})
console.log(childrenp1)
