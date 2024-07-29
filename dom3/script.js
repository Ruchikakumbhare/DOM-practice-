let head =document.querySelector('h1')
let but = document.querySelector('button')

but.addEventListener('click',function(){
    head.style.color = "white"
    head.style.backgroundColor="black"
    head.textContent =head.textContent.toUpperCase()
}) 