let a
for(let i = 0;i<10;i++){
    a = document.createElement('a')
    a.innerText = i+'  '
    a.addEventListener('click',function (e) {
        e.preventDefault()
        alert(i)
    })
    const name= document.getElementById("test")
    name.appendChild(a)
}
