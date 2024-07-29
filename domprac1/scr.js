let head =document.querySelector('h1')
let but =document.querySelector('button')

but.addEventListener('click',function(){
    head.style.color = "red"
    head.style.backgroundColor="yellow"
    head.textContent =head.textContent.toUpperCase()
})