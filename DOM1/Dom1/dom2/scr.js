let head =document.querySelector('h1')
console.log(head)

let but =document.querySelector('button')
console.log(but)


but.addEventListener('click',function(){
    head.textContent = "BIG HEADING"
    head.style.color = "grey"
    head.style.backgroundColor="yellow"
   
})