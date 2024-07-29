
let input1 =document.querySelector('input')
let button1 =document.querySelector('button')
let ul1 =document.querySelector('ul')

button1.addEventListener('click',function(){
    let name = input1.value
   let newL = document.createElement('li')
   newL.textContent =name
   ul1.appendChild(newL)
   input1.value = " "
})