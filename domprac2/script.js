let input1 =document.querySelector('input')
let button1 =document.querySelector('button')
let ol1 = document.querySelector('ol')


button1.addEventListener('click',function(){
    let fruit =input1.value
    let newE =document.createElement('li')
    newE.textContent = fruit
    ol1.appendChild(newE)
    input1.value = ""
})

































/*
button1.addEventListener('click',function(){
    let fruitg =input1.value
    let newE =document.createElement('li')
    newE.textContent =fruitg
    ol1.appendChild(newE)
    input1.value = ""
})
    */